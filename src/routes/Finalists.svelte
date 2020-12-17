<script>
  import { watchResize } from "svelte-watch-resize";
  import { onMount, beforeUpdate, afterUpdate, tick } from "svelte";
  import finalists from "../data/finalists";
  import SectionHead from "../elements/SectionHead.svelte";
  import ListHead from "../elements/ListHead.svelte";
  import Stories from "../elements/Stories.svelte";
  import ListHeader from "../elements/ListHeader.svelte";
  import SectionStories from "../elements/SectionStories.svelte";
  import Footer from "../Footer.svelte";
  import Social from "../elements/Social.svelte";
  import { validateReqFields } from "../newsletter.js";

  let editorial, country, email, submit;
  export let params = {};
  const { content } = finalists;
  let menuContentActive = false;

  function hideMenu() {
    menuContentActive = false;
  }
  const menuTypes = {
    "list-head": ListHead,
    "list-header": ListHeader,
    stories: Stories,
  };

  const elementTypes = {
    "list-head": SectionHead,
    "list-header": SectionHead,
    stories: SectionStories,
  };

  function handleResize(node) {
    // console.log("handling resize");
    scrollToEl();
  }

  async function scrollToEl() {
    if (params.wild) {
      let elmnt = document.getElementById(params.wild);
      if (elmnt) {
        elmnt.scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }

  beforeUpdate(async () => {
    scrollToEl();
  });

  afterUpdate(() => {
    validateReqFields(editorial, country, email, submit);
  });
</script>

<style>
  /* your styles go here */

  /* .menu-list {
    margin-top: 1em;
  } */
  .toggle-btn {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 110 !important;
    padding: 0;
    /* width: 60px;
    height: 60px; */
  }

  .toggle-btn img {
    width: 30px;
    height: 20px;
    opacity: 1;
    margin-top: 10px;
    margin-left: 15px;
  }

  .toggle-btn.active img {
    opacity: 0.5;
  }
  header {
    font-size: 14px;
    line-height: 1.42857143;
    color: #dbdbdb;
    width: 100%;
    left: 0;
    z-index: 99;
    height: 40px;
    top: 0;
    bottom: 0;
    position: fixed;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .nav-side-menu {
    font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
    height: 0;
  }
  .brand {
    height: 40px;
    width: 100%;
    background-color: #000;
  }
  .navbar-brand {
    float: left;
    height: 50px;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
  }
  .brand img {
    margin-left: 0;
    height: 1.25rem;
    margin-top: -5px;
  }
  .nav-side-menu .toggle-btn {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 110 !important;
    padding: 0;
    width: 60px;
    height: 60px;
  }
  .menu-content {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0;
    height: 0;
    width: 100%;
    pointer-events: none;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    -ms-transition: all 0.5s;
    transition: all 0.5s;
  }

  .menu-content.active {
    pointer-events: auto;
    opacity: 1;
    height: auto;
  }
  li.list-placeholder {
    height: 10px;
    list-style: none;
  }

  .interstitial {
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .overline {
    color: #75a8c3;
    /* color: #d40016; */
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0;
    letter-spacing: 0.5px;
  }
  .priority-3 {
    font-size: 0.6rem;
    margin: 7.5px 0;
    line-height: 1.2;
    color: #dbdbdb;
  }

  .priority-3 a {
    color: #75a8c3;
  }
  article {
    background-color: white;
    color: #333;
    width: 100%;
    overflow-x: hidden;
    font-size: 16px;
  }
  .text-container {
    margin: auto;
    padding: 5em 1em 0 1em;
    width: 100%;
  }

  @media (min-width: 768px) {
    .text-container {
      padding-top: 2em;
    }
    header {
      height: 100%;
      width: 35%;
      z-index: 0;
      background-color: #000;
      /* overflow-y: scroll;
      position: fixed; */
    }

    .nav-side-menu {
      width: 100%;
      height: auto;
    }
    .brand a {
      width: 100%;
      padding: 0;
      margin: 0;
    }
    .brand a img {
      height: 1.5rem;
      margin-left: 15px;
      margin-top: 15px;
    }
    .nav-side-menu .toggle-btn {
      display: none;
    }
    .menu-content {
      display: block;
      opacity: 1 !important;
      padding-left: 0 !important;
      height: auto !important;
      pointer-events: auto !important;
    }
    li.list-placeholder {
      height: 0;
    }
    article {
      width: 65%;
      margin-left: 35%;
    }
    .text-container {
      width: 83.33333333%;
    }
  }

  @media (min-width: 992px) {
    header {
      width: 30%;
    }
    article {
      width: 70%;
      margin-left: 30%;
    }

    .text-container {
      width: 66.66666667%;
    }
  }

  @media (min-width: 1200px) {
    header {
      width: 400px;
    }
    article {
      width: calc(100vw - 400px);
      margin-left: 400px;
    }
    .text-container {
      width: 66.66666667%;
    }
  }
  @media only screen and (max-width: 768px) {
    article.active {
      margin: 0;
      height: 100vh;
      overflow: hidden;
    }
    header.active {
      height: auto !important;
    }
  }
</style>

<header class:active={menuContentActive}>
  <div class="nav-side-menu">
    <div class="brand">
      <a href="//www.sciencemag.org/" class="navbar-brand"><img
          id="finalist_navbarimg"
          alt="Science"
          src="img/logo-science.svg" /></a>
    </div>
    <div
      on:click={() => {
        menuContentActive = !menuContentActive;
      }}
      class="toggle-btn"
      class:active={menuContentActive}
      id="toggle-btn"
      data-toggle="collapse"
      data-target="#menu-content"
      data-interactive-action="toggle-btn">
      <img src="img/collapse_btn.jpg" alt="A menu button." />
    </div>
    <div class="menu-list">
      <ul
        id="menu-content"
        class="menu-content"
        class:active={menuContentActive}>
        <li class="list-placeholder" />
        {#each content as { type, value }, i}
          <svelte:component this={menuTypes[type]} {value} {hideMenu} />
        {/each}

        <div class="article__body">
          <div
            class="interstitial"
            style="margin-top:10px; border-top:1px solid #ddd;border-bottom:1px solid #ddd">
            <form
              name="myForm"
              method="POST"
              action="https://pages.s7.exacttarget.com/page.aspx?QS=5c591a8916642e7373879b5e5e7daf2a0f568929f44dbc59996a03b49f9054c6"
              id="daily_news_sign_up"
              class="form-inline form-newsletter">
              <h3 class="overline">Sign up for our daily newsletter</h3>
              <p class="priority-2" id="interstitial-newsletter-text" />
              <label
                style="border: 0;clip: rect(1px,1px,1px,1px);height: 0;margin: 0;max-height: 1px;max-width: 1px;overflow: hidden;padding: 0;position: absolute;width: 0"
                for="interstitial-newsletter-country"
                class="element-invisible">Country</label>
              <select
                style="width: 12.9rem;padding:2px 0;margin-bottom:1em;"
                class="inpt"
                id="interstitial-newsletter-country"
                bind:this={country}
                on:change={validateReqFields(editorial, country, email, submit)}
                name="Country">
                <option selected="" value="">Country *</option>
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia, Plurinational State of</option>
                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">
                  Congo, the Democratic Republic of the
                </option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote d’Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curaçao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and McDonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">
                  Korea, Democratic People’s Republic of
                </option>
                <option value="KR">Korea, Republic of</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People’s Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libyan Arab Jamahiriya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">
                  Macedonia, the former Yugoslav Republic of
                </option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PS">Palestine</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="QA">Qatar</option>
                <option value="RE">Reunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthélemy</option>
                <option value="SH">
                  Saint Helena, Ascension and Tristan da Cunha
                </option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin (French part)</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten (Dutch part)</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">
                  South Georgia and the South Sandwich Islands
                </option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela, Bolivarian Republic of</option>
                <option value="VN">Vietnam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>
              <p class="field-container--inline">
                <label
                  style="border: 0;clip: rect(1px,1px,1px,1px);height: 0;margin: 0;max-height: 1px;max-width: 1px;overflow: hidden;padding: 0;position: absolute;width: 0"
                  for="interstitial-newsletter-email"
                  class="element-invisible">Email</label>
                <input
                  class="newsletter-field"
                  id="interstitial-newsletter-email"
                  bind:this={email}
                  type="TEXT"
                  name="EmailAddress"
                  placeholder="Email Address *"
                  on:keyup={validateReqFields(editorial, country, email, submit)} />
                <input
                  class="btn interstitial-newsletter-submit"
                  id="interstitial-newsletter-submit"
                  bind:this={submit}
                  type="SUBMIT"
                  value="Sign Up"
                  disabled="true" />
              </p>

              <p class="priority-3">
                Click to view the
                <a href="//www.sciencemag.org/about/privacy-policy">privacy
                  policy.</a>
              </p>
              <p class="priority-3">
                Required fields are indicated by an asterisk (*)
              </p>

              <input
                type="hidden"
                id="interstitial-newsletter-consent-editorial"
                bind:this={editorial}
                name="Consent_EditorialContentEmails"
                value="true" />
              <input
                type="hidden"
                id="interstitial-newsletter-consent-editorial-timestamp"
                name="Consent_EditorialContentEmails_Timestamp"
                value="" />
              <input
                type="hidden"
                id="interstitial-newsletter-origin"
                name="Consent_EditorialContentEmails_Origin"
                value="Get Our Newsletters Vis" />

              <input
                type="hidden"
                id="interstitial-newsletter-consent-first-party"
                name="Consent_FirstPartyEmails"
                value="" />
              <input
                type="hidden"
                id="interstitial-newsletter-consent-first-party-timestamp"
                name="Consent_FirstPartyEmails_Timestamp"
                value="" />
              <input
                type="hidden"
                id="interstitial-newsletter-consent-first-party-origin"
                name="Consent_FirstPartyEmails_Origin"
                value="" />
              <input
                type="hidden"
                id="interstitial-newsletter-consent-third-party"
                name="Consent_ThirdPartyEmails"
                value="" />
              <input
                type="hidden"
                id="interstitial-newsletter-consent-third-party-timestamp"
                name="Consent_ThirdPartyEmails_Timestamp"
                value="" />
              <input
                type="hidden"
                id="interstitial-newsletter-consent-third-party-origin"
                name="Consent_ThirdPartyEmails_Origin"
                value="" />

              <input
                type="HIDDEN"
                name="35 Science Latest News and Headlines"
                value="true" />
              <input
                type="HIDDEN"
                name="__successPage"
                id="__successPage"
                value="//www.sciencemag.org/subscribe/thank-you" />
              <input
                type="HIDDEN"
                name="__errorPage"
                id="__errorPage"
                value="//www.sciencemag.org/subscribe/oops" />
            </form>
          </div>
        </div>
        <Social />
      </ul>
    </div>
  </div>
  <!-- <div
    class="addthis_inline_share_toolbox_h50m"
    data-url="https://vis.sciencemag.org/breakthrough2020/finalists/"
    data-title="And the biggest scientific breakthrough of 2020 is …"
    data-description="Science chooses the top scientific achievement of the year, plus nine runners-up"
    style="clear: both;">
    <div
      id="atstbx2"
      class="at-resp-share-element at-style-responsive at-mobile addthis-smartlayers addthis-animated at4-show"
      aria-labelledby="at-0e504d63-a7e1-4f49-8432-a1d815ac1044"
      role="region">
      <span
        id="at-0e504d63-a7e1-4f49-8432-a1d815ac1044"
        class="at4-visually-hidden">AddThis Sharing Buttons</span>
      <div class="at-share-btn-elements">
        <a
          role="button"
          tabindex="0"
          class="at-icon-wrapper at-share-btn at-svc-facebook"
          style="background-color: rgb(102, 102, 102); border-radius: 26px;"><span
            class="at4-visually-hidden">Share to Facebook</span><span
            class="at-icon-wrapper"
            style="line-height: 20px; height: 20px; width: 20px;"><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              version="1.1"
              role="img"
              aria-labelledby="at-svg-facebook-1"
              style="fill: rgb(255, 255, 255); width: 20px; height: 20px;"
              class="at-icon at-icon-facebook"><title id="at-svg-facebook-1">
                Facebook
              </title>
              <g>
                <path
                  d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z"
                  fill-rule="evenodd" />
              </g></svg></span></a><a
          role="button"
          tabindex="0"
          class="at-icon-wrapper at-share-btn at-svc-google"
          style="background-color: rgb(102, 102, 102); border-radius: 26px;"><span
            class="at4-visually-hidden">Share to Google Bookmark</span><span
            class="at-icon-wrapper"
            style="line-height: 20px; height: 20px; width: 20px;"><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              version="1.1"
              role="img"
              aria-labelledby="at-svg-google-2"
              style="fill: rgb(255, 255, 255); width: 20px; height: 20px;"
              class="at-icon at-icon-google"><title id="at-svg-google-2">
                Google Bookmark
              </title>
              <g>
                <path
                  d="M16.213 13.998H26.72c.157.693.28 1.342.28 2.255C27 22.533 22.7 27 16.224 27 10.03 27 5 22.072 5 16S10.03 5 16.224 5c3.03 0 5.568 1.09 7.51 2.87l-3.188 3.037c-.808-.748-2.223-1.628-4.322-1.628-3.715 0-6.745 3.024-6.745 6.73 0 3.708 3.03 6.733 6.744 6.733 4.3 0 5.882-2.915 6.174-4.642h-6.185V14z"
                  fill-rule="evenodd" />
              </g></svg></span></a><a
          role="button"
          tabindex="0"
          class="at-icon-wrapper at-share-btn at-svc-twitter"
          style="background-color: rgb(102, 102, 102); border-radius: 26px;"><span
            class="at4-visually-hidden">Share to Twitter</span><span
            class="at-icon-wrapper"
            style="line-height: 20px; height: 20px; width: 20px;"><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              version="1.1"
              role="img"
              aria-labelledby="at-svg-twitter-3"
              style="fill: rgb(255, 255, 255); width: 20px; height: 20px;"
              class="at-icon at-icon-twitter"><title id="at-svg-twitter-3">
                Twitter
              </title>
              <g>
                <path
                  d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336"
                  fill-rule="evenodd" />
              </g></svg></span></a><a
          role="button"
          tabindex="0"
          class="at-icon-wrapper at-share-btn at-svc-compact"
          style="background-color: rgb(102, 102, 102); border-radius: 26px;"><span
            class="at4-visually-hidden">Share to More</span><span
            class="at-icon-wrapper"
            style="line-height: 20px; height: 20px; width: 20px;"><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              version="1.1"
              role="img"
              aria-labelledby="at-svg-addthis-4"
              style="fill: rgb(255, 255, 255); width: 20px; height: 20px;"
              class="at-icon at-icon-addthis"><title id="at-svg-addthis-4">
                AddThis
              </title>
              <g>
                <path
                  d="M18 14V8h-4v6H8v4h6v6h4v-6h6v-4h-6z"
                  fill-rule="evenodd" />
              </g></svg></span></a>
      </div>
    </div>
  </div> -->
</header>
<article class:active={menuContentActive} use:watchResize={handleResize}>
  <div class="text-container">
    {#each content as { type, value }, i}
      {#if value.text != 'RELATED ITEMS'}
        <svelte:component this={elementTypes[type]} {value} />
      {/if}
    {/each}
  </div>
  <Footer />
</article>
