import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, URL, i, time, author,badge } = this.props;
    return (
      <div>
        <div className="card my-3">
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'20%',zIndex:'1'}}>
                {badge}
              
              </span>
          <img
            src={
              !URL
                ? "https://images.unsplash.com/photo-1529088148495-2d9f231db829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bm8lMjBpbWFnZSUyMGhlcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                : URL
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
             
            </h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">
                By {!author ? "Mr.X" : author} on {new Date(time).toGMTString()}
              </small>
            </p>
            <a
              href={i}
              target="_blank"
              className="btn btn-primary btn-sm btn-dark"
            >
              Read here
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
