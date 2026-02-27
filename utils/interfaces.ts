// Loodely connect Interfaces with classes and functions
// interface User {
//     email: string;
//     firstName? : string;
//     lastName? : string;
// }

// class Admin {
//     role : string;
//     constructor(public email: string) {
//         this.role = 'Admin';
//     }
// }

// function profile(user: User) : string {
//     return `Welcome, ${user.email}`;
// }

// var sebi = new Admin('sebi@example.com');
// console.log(sebi.email);

// Direct implementation of the interface
namespace Blog {
    export interface IPost {
        title: string;
        body: string;
    }

    export class Post {
    title: string;
    body: string;

    constructor(post: IPost) {
        this.title = post.title;
        this.body = post.body;
    }

    printPost() {
        console.log(this.title);
        console.log(this.body);
    }
  }
}

namespace Content {
    export interface IPost {
        title: string;
        body: string;
        slug: string;
        seoKeywords: string;
    }

    export class Post implements IPost {
    title: string;
    body: string;
    slug: string;
    seoKeywords: string;

    constructor(post: IPost) {
        this.title = post.title;
        this.body = post.body;
        this.slug = post.slug;
        this.seoKeywords = post.seoKeywords;
    }

    printPost() {
        console.log(this.title);
        console.log(this.body);
        console.log(this.slug);
        console.log(this.seoKeywords);
    }
  }
}

var blogPost = new Blog.Post({
    title: "My first blog post",
    body: "This is the content of my first blog post."
});

blogPost.printPost();

var contentPost = new Content.Post({
    title: "My first content post",
    body: "This is the content of my first content post.",
    slug: "my-first-content-post",
    seoKeywords: "content, post, seo"
});

contentPost.printPost();


// interface InvoiceFunc {
//     (name : string, total : number) : void;
// }

// let myInvoice : InvoiceFunc;

// myInvoice = function(n, t) {
//     console.log(n);
//     console.log(t);
// }

// myInvoice("Google", 500);