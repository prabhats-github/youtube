import React from 'react'
import './Navbar.css';
import img from './img/youtube.png'
import img1 from './img/YouTube_music.avif'
import img2 from './img/youtubekids.png'
import v1 from './video/billo.mp4'
export const Navbar = () => {
    return (
        <div id="d11" >

            <div id="div1">

                <i id="i1" class="fa-solid fa-bars"></i>
                <i id="i2" class="fa-brands fa-youtube"></i>
                <i id="i3" class="fa-brands fa-connectdevelop"></i>

                <input type="text" placeholder='Search' />
                <i id='i4' class="fa-solid fa-magnifying-glass"></i>
                <i id="i5" class="fa-solid fa-microphone"></i>
                <i id="i6" class="fa-solid fa-video-slash"></i>
                <i id="i7" class="fa-regular fa-bell"></i>
            </div>

            <div id="all">
                <button id='btn1'>All</button>
                <button id='btn1'>Animated films</button>
                <button id='btn1'>Gaming</button>
                <button id='btn1'>Computer Programming</button>
                <button id='btn1'>Animated films</button>
                <button id='btn1'>Animated films</button>
                <button id='btn1'>Animated films</button>
                <button id='btn1'>Animated films</button>
                <button id='btn1'>Animated films</button>
                <button id='btn1'>Animated films</button>
                <button id='btn1'>Animated films</button>
                <button id='btn1'>Animated films</button>
                <button id='btn1'>Animated films</button>
                <button id='btn1'>Animated films</button>
                <button id='btn1'>Animated films</button>
                <button id='btn1'>Animated films</button>
            </div>

            <div id="videos">
                <div className="k">
                    <video controls src={v1}></video>
                </div>
                <div className="k"><video controls src={v1}></video></div>
                <div className="k"></div>
                <div className="k"></div>
                <div className="k"></div>
                <div className="k"></div>
                <div className="k"></div>
                <div className="k"></div>
                <div className="k"></div>
            </div>

            <div id='div2'>
                <div id="d">
                    <div class="d1"><i class="fa-solid fa-house"></i><p>Home</p>
                    </div>
                    <div class="d1"><i class="fa-solid fa-cloud-bolt"></i><p>Shorts</p></div>
                    <div class="d1"><i class="fa-brands fa-youtube"></i><p>Subscriptions</p></div>
                    <hr />

                    <div className="d2"><p>You</p><i class="fa-solid fa-chevron-right"></i></div>
                    <div className="d2">
                        <i class="fa-regular fa-address-card"></i>
                        <p>Your Channel</p>
                    </div>
                    <div className="d2">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <p>History</p>
                    </div>
                    <div className="d2">
                        <i class="fa-solid fa-play"></i>
                        <p>Your Videos</p>
                    </div>
                    <div className="d2">
                        <i class="fa-regular fa-clock"></i>
                        <p>Watch Later</p>
                    </div>
                    <div className="d2">
                        <i class="fa-solid fa-chevron-down"></i>
                        <p>Show more</p>
                    </div>

                    <hr />

                    <div className="div3">
                        <h4>Subscriptions</h4>
                    </div>
                    <hr />

                    <div className="div4">
                        <h4>Explore</h4>
                    </div>
                    <div className="div4">
                        <i class="fa-solid fa-fire"></i>
                        <p>Trending</p>
                    </div>
                    <div className="div4">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <p>Shopping</p>
                    </div>
                    <div className="div4">
                        <i class="fa-solid fa-music"></i>
                        <p>Music</p>
                    </div>
                    <div className="div4">
                        <i class="fa-solid fa-clapperboard"></i>
                        <p>Films</p>
                    </div>
                    <div className="div4">
                        <i class="fa-solid fa-tower-broadcast"></i>
                        <p>Live</p>
                    </div>
                    <div className="div4">
                        <i class="fa-solid fa-gamepad"></i>
                        <p>Gaming</p>
                    </div>
                    <div className="div4"><i class="fa-solid fa-newspaper"></i>
                        <p>News</p></div>
                    <div className="div4">
                        <i class="fa-solid fa-trophy"></i>
                        <p>Sport</p>
                    </div>
                    <div className="div4">
                        <i class="fa-regular fa-lightbulb"></i>
                        <p>Learning</p>
                    </div>
                    <div className="div4">
                        <i class="fa-solid fa-shirt"></i>
                        <p>Fashion & beauty</p>
                    </div>
                    <div className="div4"><i class="fa-solid fa-tower-broadcast"></i>
                        <p>Podcasts</p></div>
                    <hr />
                    <div className="d5"><h4>More from YouTube</h4></div>
                    <div className="d5">
                        <i class="fa-brands fa-youtube"></i>
                        <p>YouTube Premium</p>
                    </div>
                    <div className="d5">
                        <img id='youtube_stdio' src={img} alt='' />
                        <p>YouTube Studio</p>
                    </div>
                    <div className="d5">
                        <img id='yt_music' src={img1} alt="" />
                        <p id='yt_mus'>YouTube Music</p>
                    </div>
                    <div className="d5">
                        <img id='yt_kids' src={img2} alt="" />
                        <p >YouTube Kids</p>
                    </div>

                    <hr />

                    <div className="d6">
                        <i class="fa-solid fa-gear"></i>
                        <p>Settings</p>
                    </div>
                    <div className="d6"></div>
                    <div className="d6"></div>
                    <div className="d6"></div>


                </div>
            </div>




        </div>





    )
}

export default Navbar;