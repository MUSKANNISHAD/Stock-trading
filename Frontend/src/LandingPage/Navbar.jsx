import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // <div className='container'>
    <nav class="navbar navbar-expand-lg bg-light bg-body-tertiary border-bottom">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><img style={{ width: "30%" }} src="/media/logo.svg" alt="logo" /> </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">

        </div>
        <form className="d-flex" role="search">

          <ul class="navbar-nav p-3">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/products">Products</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/pricing">Pricing</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link  active" to="/support">Support</Link>
            </li>
          </ul>
        </form>
      </div>
    </nav>
    // </div>
  )
}
