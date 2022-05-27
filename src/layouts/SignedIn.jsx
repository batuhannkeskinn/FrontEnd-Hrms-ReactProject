import React from 'react'
import { Dropdown, Menu , Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src = "https://lh3.googleusercontent.com/LrsHzxIQ1NSq8vvmRisd3nbXIbYkBbjSARz3yWuihURmeTWedOpWBgtwZULm2Xzby3Vcdw=s128"/> 
            <Dropdown pointing = "top right" text='Batu'>
                <Dropdown.Menu>
                <Dropdown.Item text = "Bilgilerim" icon = "info"/>
                <Dropdown.Item onClick={signOut}text = "Çıkış Yap"   icon = "sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
