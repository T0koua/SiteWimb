import React from 'react';
import './rodape.css'
function Rodape() {
  return (
    <div class="footer">
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-logo-column">
                    <a href="/" aria-current="page" class="w-inline-block w--current">
                        <div class="text-block-2-copy">Wimb ©</div>
                    </a>
                </div>
            <div>
                <a href="https://twitter.com/webflow" target="_blank" class="social-footer-link w-inline-block"></a>
                <a href="https://www.facebook.com/webflow" class="social-footer-link w-inline-block"></a>
                <a href="https://www.instagram.com/wimb_ofc/" target="_blank" class="social-footer-link w-inline-block">
                <img src="https://assets-global.website-files.com/662a444b5e5de1b24296cd35/662a444b5e5de1b24296cdcf_Insta.svg" width="30" alt="Instagram Logo"></img>
                </a>
            </div>
        </div>
            <div class="footer-bottom-wrapper">
                <div class="small footer-small">Feito por WIMB© 2024.</div>
            </div>
        </div>
    </div>
  );
}

export default Rodape;
