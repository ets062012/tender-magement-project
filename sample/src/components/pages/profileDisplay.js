import React, { useState, useEffect } from 'react'
import { supabase } from '../../config/supabaseClient'
import '../css/profileDisplay.css'
import { BellOutlined, CommentOutlined, HeartOutlined, HomeOutlined, LineChartOutlined, LogoutOutlined, PieChartOutlined, RightOutlined, SearchOutlined, ShareAltOutlined, VideoCameraAddOutlined, WalletOutlined } from '@ant-design/icons';
import { UserAuth } from "../../context/AuthContext";
import { Avatar, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { PhoneCallbackOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const ProfileDash = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [startDate, setStartDate] = useState(null);
    const [email, setEmail] = useState('')
    const [userName, setuserName] = useState('');
    const [fullName, setfullName] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [image, setImage] = useState('')
    const [avatarUrl, setavatarUrl] = useState('')
    const [location, setLocation] = useState('');
    const { user } = UserAuth()


    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data, error } = await supabase
                    .from("profiles")
                    .select("username, full_name, email, dateofbirth,avatar_url, phonenumber, location")
                    .eq("id", user.uid)
                    .single();

                if (error) {
                    console.log("Error retrieving profile");
                    console.log(error);
                }

                if (data) {
                    setuserName(data.username || "");
                    setfullName(data.full_name || "");
                    setEmail(data.email || "");
                    setStartDate(data.dateofbirth || "");
                    setphoneNumber(data.phonenumber || "");
                    setavatarUrl(data.avatar_url || "");
                    setLocation(data.location || "");
                }
            } catch (error) {
                console.log("Error retrieving profile");
                console.log(error);
            }
        };
        fetchProfile();
    }, []);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const navigate = useNavigate()
    const handleProfile = () => {
        navigate('/profile')
    }

    return (
        <div id='__next'>
            <div className='db_wrapper'>
                <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                    {/* <div className='sidebar'> */}
                    <header>
                        <div className='image-text'>
                            <span className='image'>
                                {avatarUrl ? <img src={`https://dfvcmxwvvqvmnpikczag.supabase.co/storage/v1/object/public/avatars/${avatarUrl}`} alt="profilepic" className="avatar" /> : "no image choosen"}
                            </span>

                            <div className='text header-text'>
                                <span className='name'>{userName}</span>
                            </div>
                        </div>


                        <button onClick={toggleSidebar}>
                            {/* <button> */}
                            <RightOutlined className=' toggle' />
                        </button>

                    </header>

                    <div className='menu-bar'>
                        <div className='menu'>
                            <li className='search-box'>
                                <SearchOutlined className='icon' />
                                <input type='search' placeholder='search...' />
                            </li>
                            <ul className='menu-links'>
                                <li className='nav-link'>
                                    <a href='#'>
                                        <HomeOutlined className='icon' />
                                        <span className='text nav-text'>Dashboard</span>
                                    </a>
                                </li>

                                <li className='nav-link'>
                                    <a href='#'>
                                        <LineChartOutlined className='icon' />
                                        <span className='text nav-text'>Revenue</span>
                                    </a>
                                </li>

                                <li className='nav-link'>
                                    <a href='#'>
                                        <BellOutlined className='icon' />
                                        <span className='text nav-text'>Notification</span>
                                    </a>
                                </li>

                                <li className='nav-link'>
                                    <a href='#'>
                                        <PieChartOutlined className='icon' />
                                        <span className='text nav-text'>Analytics</span>
                                    </a>
                                </li>

                                <li className='nav-link'>
                                    <a href='#'>
                                        <HeartOutlined className='icon' />
                                        <span className='text nav-text'>Likes</span>
                                    </a>
                                </li>

                                <li className='nav-link'>
                                    <a href='#'>
                                        <WalletOutlined className='icon' />
                                        <span className='text nav-text'>Wallets</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='bottom-content'>
                            <li className=''>
                                <a href='#'>
                                    <LogoutOutlined className='icon' />
                                    <span className='text nav-text'>Logout</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>

                <div className='page-content ' >
                    <div className='header'>
                        <div className='nav-search'>
                            <input type='search' placeholder='search...' />
                        </div>
                        <div className='bell-avatar'>

                            <a className='bell rounded-circle'>
                                <BellOutlined />
                            </a>
                            <Avatar src={`https://dfvcmxwvvqvmnpikczag.supabase.co/storage/v1/object/public/avatars/${avatarUrl}`} size={40} icon={<UserOutlined />} />
                        </div>
                    </div>
                    <div className='p-6 container-fluid'>

                        <div className='overview'>
                            <h1>Overview</h1>
                        </div>

                        <div className='profile'>
                            <div className='cover'>
                                <img src='https://hookagency.com/wp-content/uploads/2018/05/gradient-background.jpeg' alt='Cover' />
                            </div>
                            {/* <div className='profilePic-img'>
                                <Avatar className='avatar' size={120} icon={<UserOutlined />} />
                            </div> */}

                            <div className='profileInfo'>
                                <div>
                                    <div className='profilePic'>
                                        <div className='profilePic-img'>
                                            <Avatar src={`https://dfvcmxwvvqvmnpikczag.supabase.co/storage/v1/object/public/avatars/${avatarUrl}`} className='avatar' size={130} icon={<UserOutlined />} />
                                        </div>
                                        <div className='profilePic-text'>
                                            <p>{fullName}<br />
                                                {email}</p>


                                        </div>
                                    </div>
                                </div>

                                <div className='edit-btn'>

                                    <button className='btn' onClick={handleProfile}>Edit picture</button>
                                </div>

                            </div>


                            <div className='nav-container'>
                                <ul className='nav-list-container'>
                                    <li className='nav-list active'>Overview</li>
                                    <li className='nav-list'>project</li>
                                    <li className='nav-list'>Files</li>
                                    <li className='nav-list'>Teams</li>
                                    <li className='nav-list'>Followers</li>
                                    <li className='nav-list'>Activity</li>
                                </ul>
                            </div>

                        </div>



                        <div className='info'>
                            {/* ========== Card ========= */}
                            <div className='card-project'>
                                <div className='card'>
                                    <pre className='card-title'>About Me</pre>
                                    <span className='card-bio'>Bio</span>
                                    <p className='mt-2 mb-6'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Suspen disse var ius enim in eros elementum tristique.
                                        Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                                        commodo diam libero vitae erat.
                                    </p>
                                    <div className='card-position'>
                                        <span>POSITION</span>
                                        <p> I am Tender Management System</p>
                                    </div>
                                    <div className='card-personal-info'>
                                        <div className='card-phone-email'>
                                            <div className='card-phone'>
                                                <span>PHONE</span>
                                                <p>{phoneNumber}</p>
                                            </div>

                                            <div className='card-email'>
                                                <span>EMAIL</span>
                                                <p> {email}</p>
                                            </div>
                                        </div>
                                        <div className='card-DOB-location'>
                                            <div className='card-DOB'>
                                                <span>DATE OF BIRTH</span>
                                                <p>{startDate}</p>
                                            </div>

                                            <div className='card-location'>
                                                <span>LOCATION</span>
                                                <p> {location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ========- Project ========= */}

                                <div className='project'>
                                    <p>Project contributions</p>

                                    <div className='project-item'>
                                        <div className='project-logo-info'>
                                            <div className='project-logo'>
                                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png' alt='slack' />
                                            </div>
                                            <div className='project-info'>
                                                <span>Slack Figma Design UI</span>
                                                <p> Project description and details about...</p>
                                            </div>
                                        </div>
                                        <div className='project-profile'>
                                            <div className='project-profile-avatar'>
                                                <Avatar.Group>
                                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                    <a href="https://ant.design">
                                                        <Avatar
                                                            style={{
                                                                backgroundColor: '#f56a00',
                                                            }}
                                                        >
                                                            K
                                                        </Avatar>
                                                    </a>
                                                    <Tooltip title="Ant User" placement="top">
                                                        <Avatar
                                                            style={{
                                                                backgroundColor: '#87d068',
                                                            }}
                                                            icon={<UserOutlined />}
                                                        />
                                                    </Tooltip>
                                                    <Avatar
                                                        style={{
                                                            backgroundColor: '#1677ff',
                                                        }}
                                                        icon={<AntDesignOutlined />}
                                                    />
                                                </Avatar.Group>
                                            </div>

                                            <div class="project-profile-dropdown">
                                                <a class="text-muted text-primary-hover" href="/pages/profile">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="15px"
                                                        height="15px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="text-muted">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="12" cy="5" r="1"></circle>
                                                        <circle cx="12" cy="19" r="1"></circle>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='project-item'>
                                        <div className='project-logo-info'>
                                            <div className='project-logo'>
                                                <img src='https://i.pinimg.com/736x/5d/95/38/5d95381726fea01966a317b8943b1b87.jpg' alt='3D design ' />
                                            </div>
                                            <div className='project-info'>
                                                <span>Design 3d Character</span>
                                                <p> Project description and details about...</p>
                                            </div>
                                        </div>
                                        <div className='project-profile'>
                                            <div className='project-profile-avatar'>
                                                <Avatar.Group>
                                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                    <a href="https://ant.design">
                                                        <Avatar
                                                            style={{
                                                                backgroundColor: '#f56a00',
                                                            }}
                                                        >
                                                            K
                                                        </Avatar>
                                                    </a>
                                                    <Tooltip title="Ant User" placement="top">
                                                        <Avatar
                                                            style={{
                                                                backgroundColor: '#87d068',
                                                            }}
                                                            icon={<UserOutlined />}
                                                        />
                                                    </Tooltip>
                                                    <Avatar
                                                        style={{
                                                            backgroundColor: '#1677ff',
                                                        }}
                                                        icon={<AntDesignOutlined />}
                                                    />
                                                </Avatar.Group>
                                            </div>

                                            <div class="project-profile-dropdown">
                                                <a class="text-muted text-primary-hover" href="/pages/profile">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="15px"
                                                        height="15px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="text-muted">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="12" cy="5" r="1"></circle>
                                                        <circle cx="12" cy="19" r="1"></circle>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='project-item'>
                                        <div className='project-logo-info'>
                                            <div className='project-logo'>
                                                <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='Git Hub' />
                                            </div>
                                            <div className='project-info'>
                                                <span>Github Development</span>
                                                <p> Project description and details about...</p>
                                            </div>
                                        </div>
                                        <div className='project-profile'>
                                            <div className='project-profile-avatar'>
                                                <Avatar.Group>
                                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                    <a href="https://ant.design">
                                                        <Avatar
                                                            style={{
                                                                backgroundColor: '#f56a00',
                                                            }}
                                                        >
                                                            K
                                                        </Avatar>
                                                    </a>
                                                    <Tooltip title="Ant User" placement="top">
                                                        <Avatar
                                                            style={{
                                                                backgroundColor: '#87d068',
                                                            }}
                                                            icon={<UserOutlined />}
                                                        />
                                                    </Tooltip>
                                                    <Avatar
                                                        style={{
                                                            backgroundColor: '#1677ff',
                                                        }}
                                                        icon={<AntDesignOutlined />}
                                                    />
                                                </Avatar.Group>
                                            </div>

                                            <div class="project-profile-dropdown">
                                                <a class="text-muted text-primary-hover" href="/pages/profile">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="15px"
                                                        height="15px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="text-muted">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="12" cy="5" r="1"></circle>
                                                        <circle cx="12" cy="19" r="1"></circle>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='project-item'>
                                        <div className='project-logo-info'>
                                            <div className='project-logo'>
                                                <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/100_Dropbox_logo_logos-512.png' alt='DropBox' />
                                            </div>
                                            <div className='project-info'>
                                                <span>Dropbox Design System</span>
                                                <p> Project description and details about...</p>
                                            </div>
                                        </div>
                                        <div className='project-profile'>
                                            <div className='project-profile-avatar'>
                                                <Avatar.Group>
                                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                    <a href="https://ant.design">
                                                        <Avatar
                                                            style={{
                                                                backgroundColor: '#f56a00',
                                                            }}
                                                        >
                                                            K
                                                        </Avatar>
                                                    </a>
                                                    <Tooltip title="Ant User" placement="top">
                                                        <Avatar
                                                            style={{
                                                                backgroundColor: '#87d068',
                                                            }}
                                                            icon={<UserOutlined />}
                                                        />
                                                    </Tooltip>
                                                    <Avatar
                                                        style={{
                                                            backgroundColor: '#1677ff',
                                                        }}
                                                        icon={<AntDesignOutlined />}
                                                    />
                                                </Avatar.Group>
                                            </div>

                                            <div class="project-profile-dropdown">
                                                <a class="text-muted text-primary-hover" href="/pages/profile">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="15px"
                                                        height="15px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="text-muted">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="12" cy="5" r="1"></circle>
                                                        <circle cx="12" cy="19" r="1"></circle>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='project-item'>
                                        <div className='project-logo-info'>
                                            <div className='project-logo'>
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDnlAHvCw3SHcX4GNSPlyhiaj4NnknmyTrOer5RqmP47FNMdmjokrTvMwDEnUyUCGz3Q&usqp=CAU' alt='Project Management' />
                                            </div>
                                            <div className='project-info'>
                                                <span>Project Management</span>
                                                <p> Project description and details about...</p>
                                            </div>
                                        </div>
                                        <div className='project-profile'>
                                            <div className='project-profile-avatar'>
                                                <Avatar.Group>
                                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                    <a href="https://ant.design">
                                                        <Avatar
                                                            style={{
                                                                backgroundColor: '#f56a00',
                                                            }}
                                                        >
                                                            K
                                                        </Avatar>
                                                    </a>
                                                    <Tooltip title="Ant User" placement="top">
                                                        <Avatar
                                                            style={{
                                                                backgroundColor: '#87d068',
                                                            }}
                                                            icon={<UserOutlined />}
                                                        />
                                                    </Tooltip>
                                                    <Avatar
                                                        style={{
                                                            backgroundColor: '#1677ff',
                                                        }}
                                                        icon={<AntDesignOutlined />}
                                                    />
                                                </Avatar.Group>
                                            </div>

                                            <div class="project-profile-dropdown">
                                                <a class="text-muted text-primary-hover" href="/pages/profile">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="15px"
                                                        height="15px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="text-muted">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="12" cy="5" r="1"></circle>
                                                        <circle cx="12" cy="19" r="1"></circle>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*=============== Post-Team-Activity ==============  */}
                            <div className='post-team-activity'>
                                {/* ============ Post ============= */}
                                <div className='post'>

                                    <div className='post-profile-dropdown'>
                                        <div className='post-profile'>
                                            <div className='post-profile-avatar'>
                                                <Avatar className='avatar' size={40} icon={<UserOutlined />} />
                                            </div>
                                            <div className='post-profile-text'>
                                                <p> <b>{fullName}</b> <br />
                                                    20 minutes ago</p>
                                            </div>
                                        </div>

                                        <div class="post-profile-dropdown">
                                            <a class="text-muted text-primary-hover" href="/pages/profile">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="15px"
                                                    height="15px"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="text-muted">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    <div className='post-text'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Suspen disse var ius enim in eros elementum tristique.
                                            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                                            commodo diam libero vitae erat.</p>
                                    </div>

                                    <div className='post-photo'>
                                        <img src='https://img.freepik.com/premium-vector/business-girl-man-background-financial-charts-neon-colors-concept-trade-analytics-business-financial-exchange-vector_174639-40588.jpg' alt='analytics' />

                                    </div>
                                    <div className='post-button'>
                                        <div className='post-nav-container'>
                                            <ul className='post-nav-list-container'>
                                                <li className='post-nav-list active'>
                                                    <HeartOutlined className='heartoutlined' />
                                                    20 Like</li>
                                                <li className='post-nav-list'>
                                                    <CommentOutlined className='comment' />
                                                    12 Comments</li>
                                                <li className='post-nav-list'>
                                                    <ShareAltOutlined className='share' />
                                                    share</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className='post-likes'>
                                        <div className='post-likes-avatar'>
                                            <Avatar.Group>
                                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                <a href="https://ant.design">
                                                    <Avatar
                                                        style={{
                                                            backgroundColor: '#f56a00',
                                                        }}
                                                    >
                                                        K
                                                    </Avatar>
                                                </a>
                                                <Tooltip title="Ant User" placement="top">
                                                    <Avatar
                                                        style={{
                                                            backgroundColor: '#87d068',
                                                        }}
                                                        icon={<UserOutlined />}
                                                    />
                                                </Tooltip>
                                                <Avatar
                                                    style={{
                                                        backgroundColor: '#1677ff',
                                                    }}
                                                    icon={<AntDesignOutlined />}
                                                />
                                            </Avatar.Group>
                                        </div>

                                        <div className='post-likes-text'>
                                            <p> You and 20 More liked this</p>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className='post-dialog'>
                                        <div className='post-dialog-avatar'>
                                            <Avatar className='avatar' size={40} icon={<UserOutlined />} />
                                        </div>
                                        <div className='post-dialog-input'>
                                            <p>Name</p>
                                            <input type='search' />
                                            <button > Post</button>
                                        </div>
                                    </div>
                                </div>

                                {/* ========== team-Activity ============== */}

                                <div className='team-activity'>
                                    {/* ========= Team ============= */}
                                    <div className='team'>
                                        <p className='team-title'>My Team</p>
                                        <div className='team-item'>
                                            <div className='team-logo-info'>
                                                <div className='team-logo'>
                                                    <Avatar className='avatar' size={40} icon={<UserOutlined />} />
                                                </div>
                                                <div className='team-info'>
                                                    <span>Dianna Smiley</span>
                                                    <p> UI / UX Designer</p>
                                                </div>
                                            </div>
                                            <div className='team-profile'>
                                                <div className='team-profile-phone'>
                                                    <PhoneCallbackOutlined />
                                                </div>

                                                <div class="team-profile-dropdown">
                                                    <VideoCameraAddOutlined />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='team-item'>
                                            <div className='team-logo-info'>
                                                <div className='team-logo'>
                                                    <Avatar className='avatar' size={40} icon={<UserOutlined />} />
                                                </div>
                                                <div className='team-info'>
                                                    <span>Anne Brewer</span>
                                                    <p> Senior UX Designer</p>
                                                </div>
                                            </div>
                                            <div className='team-profile'>
                                                <div className='team-profile-phone'>
                                                    <PhoneCallbackOutlined />
                                                </div>

                                                <div class="team-profile-dropdown">
                                                    <VideoCameraAddOutlined />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='team-item'>
                                            <div className='team-logo-info'>
                                                <div className='team-logo'>
                                                    <Avatar className='avatar' size={40} icon={<UserOutlined />} />
                                                </div>
                                                <div className='team-info'>
                                                    <span>Richard Christmas</span>
                                                    <p> Front-End Engineer</p>
                                                </div>
                                            </div>
                                            <div className='team-profile'>
                                                <div className='team-profile-phone'>
                                                    <PhoneCallbackOutlined />
                                                </div>

                                                <div class="team-profile-dropdown">
                                                    <VideoCameraAddOutlined />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='team-item'>
                                            <div className='team-logo-info'>
                                                <div className='team-logo'>
                                                    <Avatar className='avatar' size={40} icon={<UserOutlined />} />
                                                </div>
                                                <div className='team-info'>
                                                    <span>Nicholas Binder</span>
                                                    <p>Content Marketing Manager</p>
                                                </div>
                                            </div>
                                            <div className='team-profile'>
                                                <div className='team-profile-phone'>
                                                    <PhoneCallbackOutlined />
                                                </div>

                                                <div class="team-profile-dropdown">
                                                    <VideoCameraAddOutlined />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* =========== Activity ============== */}
                                    <div className='activity'>
                                        <p className='activity-title'>Activity Feed</p>

                                        <div className='activity-item'>
                                            <div className='activity-logo-info'>
                                                <div className='activity-logo'>
                                                    <Avatar className='avatar' size={40} icon={<UserOutlined />} />
                                                </div>
                                                <div className='activity-info'>
                                                    <span>Dianna Smiley</span>
                                                    <p> Just create a new Project in Dashui...</p>
                                                    <p>2m ago</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='activity-item'>
                                            <div className='activity-logo-info'>
                                                <div className='activity-logo'>
                                                    <Avatar className='avatar' size={40} icon={<UserOutlined />} />
                                                </div>
                                                <div className='activity-info'>
                                                    <span>Irene Hargrove</span>
                                                    <p> Comment on Bootstrap Tutorial Says Hi, I m irene...</p>
                                                    <p>1hour ago</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='activity-item'>
                                            <div className='activity-logo-info'>
                                                <div className='activity-logo'>
                                                    <Avatar className='avatar' size={40} icon={<UserOutlined />} />
                                                </div>
                                                <div className='activity-info'>
                                                    <span>Trevor Bradley</span>
                                                    <p> Just share your article on Social Media...</p>
                                                    <p>2month ago</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>


                    <div className='footer'>
                        <div className='footer-made'>
                            <p> Made by Trip ways and Kilole</p>
                        </div>

                        <div className='footer-destributed'>
                            <p>Destributed by Trip Ways and Kilole</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default ProfileDash;