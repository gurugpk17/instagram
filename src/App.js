// import logo from './logo.svg';
import './App.css';
import Video from '../src/resources/video.mp4';
import Insta_image from "../src/resources/insta.png";
import Facebook_logo from "../src/resources/facebook.png";
import Google_play from "../src/resources/google play.png";
import Microsoft from "../src/resources/microsoft.png";

export default function App() {
  return (
    <div className='App'>
      <div className='body'>
        <video height="607" muted autoPlay loop >
          <source src={Video} type="video/mp4" />
        </video>
        <div className='container'>
          <div className='login'>
            <img src={Insta_image} className='insta_image' alt='Insta_image' />
            <form action='#'>
              <input type='text' id='user_name' placeholder='Phone number, username or email address' /><br />
              <input type='password' id='password' placeholder='Password' /><br />
              <button type="submit">Login</button>
            </form>

            <div className='hr_or'>
              <hr />
              <h3>OR</h3>
              <hr />
            </div>

            <div className='facebook-login'>
              <img src={Facebook_logo} className='facebook_logo' alt='Facebook_logo' />
              <span>Log in with Facebook</span>
            </div>

            <a href='#' className='forgot-password'>Forgot password?</a>
          </div>

          <div className='signup'>
            <p>Don't have an account? <a href='#'>Sign up</a></p>
          </div>

          <div className='get_app'> 
            <p>Get the App</p>
            <div className='get_logos'>
              <img src={Google_play} className='google_play' alt='google_play'/>
              <img src={Microsoft} className='microsoft' alt='microsoft'/>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='footer-links'>
          <a href='#'>Meta</a>
          <a href='#'>About</a>
          <a href='#'>Blog</a>
          <a href='#'>Jobs</a>
          <a href='#'>Help</a>
          <a href='#'>API</a>
          <a href='#'>Privacy</a>
          <a href='#'>Terms</a>
          <a href='#'>Locations</a>
          <a href='#'>Instagram Lite</a>
          <a href='#'>Threads</a>
          <a href='#'>Contact Uploading & Non-Users</a>
          <a href='#'>Meta Verified</a>
        </div>
        <div className='footer-bottom'>
          <select className='language-dropdown'>
            <option value='en'>English</option>
            <option value='es'>Spanish</option>
            <option value='fr'>French</option>
            <option value='de'>German</option>
            <option value='it'>Italian</option>
            <option value='zh'>Chinese</option>
            <option value='hi'>Hindi</option>
          </select>
          <span>© 2024 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
}
