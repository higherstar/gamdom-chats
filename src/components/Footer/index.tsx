import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'
import InstagramIcon from '../../assets/images/instagram.png'
import TwitterIcon from '../../assets/images/twitter.png'
import TelegramIcon from '../../assets/images/telegram.png'
import DiscordIcon from '../../assets/images/discord.png'
import YoutubeIcon from '../../assets/images/youtube.png'
import GamStopIcon from '../../assets/images/gamstop.svg'
import GamCareIcon from '../../assets/images/gamcare.svg'
import GAIcon from '../../assets/images/ga.svg'
import AwareIcon from '../../assets/images/aware.png'
import WarningIcon from '../../assets/images/warning.svg'
import GCIcon from '../../assets/images/gc.png'
import VISAIcon from '../../assets/images/visa.svg'
import MasterCardIcon from '../../assets/images/mastercard.svg'
import EcopayzIcon from '../../assets/images/ecopayz.svg'

const Footer = () => {
  return (
    <S.Container>
      <div className='footer__links'>
        <div className='container'>
          <div className='links'>
            <div className='col'>
              <h5>Info</h5>
              <ul>
                <li><Link to='#'>About Us</Link></li>
                <li><Link to='#'>Careers</Link></li>
                <li><Link to='#'>Partnership</Link></li>
                <li><Link to='#'>TOS</Link></li>
                <li><Link to='#'>Policies</Link></li>
                <li><Link to='#'>Provably Fair</Link></li>
              </ul>
            </div>
            <div className='col'>
              <h5>Promotional</h5>
              <ul>
                <li><Link to='#'>Rewards</Link></li>
                <li><Link to='#'>Affiliates</Link></li>
              </ul>
            </div>
            <div className='col'>
              <h5>Games</h5>
              <ul>
                <li><Link to='#'>Slots</Link></li>
                <li><Link to='#'>Crash</Link></li>
                <li><Link to='#'>Roulette</Link></li>
                <li><Link to='#'>HiLo</Link></li>
                <li><Link to='#'>Casino</Link></li>
              </ul>
            </div>
            <div className='col'>
              <h5>Support</h5>
              <ul>
                <li><Link to='#'>Contact Us</Link></li>
                <li><Link to='#'>FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className='socials'>
            <div className='col'>
              <h5>Social Media</h5>
              <ul>
                <li><Link to='#'><img src={TwitterIcon} alt='Twitter' /> Follow out Twitter</Link></li>
                <li><Link to='#'><img src={InstagramIcon} alt='Instagram' /> Follow our Instgram</Link></li>
              </ul>
            </div>
            <div className='col'>
              <h5>&nbsp;</h5>
              <ul>
                <li><Link to='#'><img src={TelegramIcon} alt='Telegram' /> Join our Telegram</Link></li>
                <li><Link to='#'><img src={DiscordIcon} alt='Discord' /> Join our Discord</Link></li>
                <li><Link to='#'><img src={YoutubeIcon} alt='Youtube' /> Subscribe on Youtube</Link></li>
              </ul>
            </div>
          </div>
          <div className='warnings'>
            <div className='row'>
              <Link to='#'><img src={GamStopIcon} alt='GamStop'/></Link>
              <Link to='#'><img src={GamCareIcon} alt='GamCare'/></Link>
            </div>
            <div className='row'>
              <img src={GAIcon} alt='GA' />
              <Link to='#'><img src={AwareIcon} alt='Aware' /></Link>
            </div>
            <div className='row'>
              <span className='text'>
                Warning: Gambling can be addictive
              </span>
              <img src={WarningIcon} alt='Warning' />
            </div>
          </div>
        </div>
      </div>
      <div className='footer__copyright'>
        <div className='container'>
          <div className='company'>
            <div className='egaming'>
              <Link to='#'><img src={GCIcon} alt='GC' /></Link>
            </div>
            <div className='text'>
              Copyright © 2016-2021 Smein Hosting N.V. Abraham de Veerstraat 9, Willemstad, Curacao (Company Registration No. 141727)<br/>
              Payment processing: Vilnius IT Solutions UAB, Ateities g. 31B-101, LT-06326 Vilnius (Company Registration No. 304988128)
            </div>
          </div>
          <div className='providers'>
            <div className='payments'>
              <img src={VISAIcon} alt='Visa' />
              <img src={MasterCardIcon} alt='MasterCard' />
              <img src={EcopayzIcon} alt='Ecopayz' />
            </div>
          </div>
        </div>
      </div>
    </S.Container>
  )
}

export default Footer