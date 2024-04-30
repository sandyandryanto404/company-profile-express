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



async function ping(req, res) {
    res.status(200).send({
        data: null,
        status: true,
        message: "ok"
    });
    return;
}

async function home(req, res) {
    res.status(200).send({
        data: null,
        status: true,
        message: "ok"
    });
    return;
}

async function about(req, res) {
    res.status(200).send({
        data: null,
        status: true,
        message: "ok"
    });
    return;
}

async function service(req, res) {
    res.status(200).send({
        data: null,
        status: true,
        message: "ok"
    });
    return;
}

async function faq(req, res) {
    res.status(200).send({
        data: null,
        status: true,
        message: "ok"
    });
    return;
}

async function contact(req, res) {
    res.status(200).send({
        data: null,
        status: true,
        message: "ok"
    });
    return;
}

async function message(req, res) {
    res.status(200).send({
        data: null,
        status: true,
        message: "ok"
    });
    return;
}

async function subscribe(req, res) {
    res.status(200).send({
        data: null,
        status: true,
        message: "ok"
    });
    return;
}

module.exports = {
    ping,
    home,
    about,
    service,
    faq,
    contact,
    message,
    subscribe
}