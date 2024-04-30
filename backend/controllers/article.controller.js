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

async function list(req, res) {
    res.status(200).send({
        data: null,
        status: true,
        message: "ok"
    });
    return;
}

async function detail(req, res) {
    res.status(200).send({
        data: null,
        status: true,
        message: "ok"
    });
    return;
}

async function comments(req, res) {
    res.status(200).send({
        data: null,
        status: true,
        message: "ok"
    });
    return;
}

async function comment(req, res) {
    res.status(200).send({
        data: null,
        status: true,
        message: "ok"
    });
    return;
}

module.exports = {
    list,
    detail,
    comments,
    comment
}