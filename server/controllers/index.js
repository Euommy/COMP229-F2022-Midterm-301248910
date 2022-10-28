// Student Name: Eman Shalabi
// Student ID: 301248910

export function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}