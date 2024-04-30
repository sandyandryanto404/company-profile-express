/**
 * This file is part of the Sandy Andryanto Company Profile Website.
 *
 * @author     Sandy Andryanto <sandy.andryanto404@gmail.com>
 * @copyright  2024
 *
 * For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 */

const db = require("../models");
const { Sequelize, Op } = require("sequelize");
const auth_user = require('../helpers/auth_user');
const User = db.User;
const Article = db.Article;
const ArticleComment = db.ArticleComment;
const ArticleReference = db.ArticleReference;

async function list(req, res) {
  User.hasMany(Article, { foreignKey: "userId" });
  Article.belongsTo(User, { foreignKey: "userId" });

  ArticleReference.belongsTo(Article, { foreignKey: "articleId" });
  Article.hasMany(ArticleReference, { foreignKey: "articleId" });

  let relations = [
    {
      model: User,
      attributes: { exclude: ["createdAt", "updatedAt"] },
    },
    {
      model: ArticleReference,
      attributes: { exclude: ["createdAt", "updatedAt"] },
    },
  ];

  let page = req.query.page || 1;
  let limit = 3 * parseInt(page);
  let newArticle = await Article.findOne({
    include: relations,
    where: { status: 1 },
    order: [["id", "desc"]],
  });

  let newArticles = await Article.findAll({
    include: relations,
    where: {
      status: 1,
      id: {
        [Op.not]: newArticle.id,
      },
    },
    limit: 3,
    order: [["id", "desc"]],
  });

  let Stories = await Article.findOne({
    include: relations,
    where: { status: 1 },
    limit: limit,
    order: [["id", "desc"]],
  });

  let totalActive = await Article.count({ where: { status: 1 } });

  let data = {
    continue: limit <= totalActive,
    new_article: newArticle,
    new_articles: newArticles,
    page: page,
    stories: Stories,
  };

  res.status(200).send({
    data: data,
    status: true,
    message: "ok",
  });
  return;
}

async function detail(req, res) {
  let slug = req.params.slug;
  User.hasMany(Article, { foreignKey: "userId" });
  Article.belongsTo(User, { foreignKey: "userId" });

  let relations = [
    {
      model: User,
      attributes: {
        exclude: ["createdAt", "updatedAt", "password", "resetToken"],
      },
    },
  ];

  let model = await Article.findOne({
    include: relations,
    where: { slug: slug },
  });

  if (!model) {
    res.status(400).send({
      message: "Record with id " + id + " was not found.!!",
    });
    return;
  }

  res.status(200).send({
    data: model,
    status: true,
    message: "ok",
  });
  return;
}

async function comments(req, res) {
  User.hasMany(ArticleComment, { foreignKey: "userId" });
  ArticleComment.belongsTo(User, { foreignKey: "userId" });

  let relations = [
    {
      model: User,
      attributes: {
        exclude: ["createdAt", "updatedAt", "password", "resetToken", "confirmToken"],
      },
    },
  ];

  let commentTree = await buildTree(relations, req.params.id, null);

  res.status(200).send({
    data: commentTree,
    status: true,
    message: "ok",
  });
  return;
}

async function comment(req, res) {

  let article_id = req.params.id
  let user = await auth_user(req)

  if(!user){
    res.status(401).send({ message: "401 unauthorized invalid token" })
    return
  }

  let formData = {
    articleId: article_id,
    userId: user.id,
    comment: req.body.comment,
    status: 1,
    created_at: new Date(),
    updated_at: new Date()
  }

  let result = await ArticleComment.create(formData);

  res.status(200).send({
    data: result,
    status: true,
    message: "ok",
  });
  return;
}

async function buildTree(relations, article_id, parent_id) {
  var branch = [];
  var comments = await ArticleComment.findAll({
    include: relations,
    where: { articleId: article_id, parentId: parent_id },
    order: [["id", "desc"]],
  });

  await Promise.all(
    comments.map(async (comment) => {

      let obj = {
         "id": comment.id,
         "parentId": comment.parentId,
         "comment": comment.comment,
         "user": comment.User
      }

      let children = await buildTree(relations, article_id, comment.id)
      
      if(children.length > 0){
        obj["children"] = children;
      }else{
        obj["children"] = [];
      }

      branch.push(obj);
    })
  );

  return branch;
}

module.exports = {
  list,
  detail,
  comments,
  comment,
};
