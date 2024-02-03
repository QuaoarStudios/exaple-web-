// switch
let navIndex = 0

const navToggle = function ($Wrapper) {
  const navActive = navIndex = 1 - navIndex
  const navRemove = Number(!navActive)

  $Wrapper[navRemove].classList.remove('wrapper--show')
  $Wrapper[navActive].classList.add('wrapper--show')

  $Wrapper[navActive].innerHTML = Nav(navActive)
  $Wrapper[navRemove].innerHTML = ''

  return navActive
}

function Nav ($version) {
  const version = ($version) ? '' : '-mobile'

  const code = `
  <nav id='nav${version}'>

    <div class="nav-logo">
      <p>Website</p>
    </div>

    <ul class="nav-list${version}">

      <li>
        <a href="#">page</a>
      </li>
      <li>
        <a href="#">page</a>
      </li>
      <li>
        <a href="#">page</a>
      </li>

    </ul>

    <div id='nav-button'>
      <span class="material-symbols-outlined">
        apps
      </span>
    </div>

  </nav>   
  `

  return code
}

window.addEventListener('resize', function () {
  if (window.innerWidth > 1026) {
    if (!navIndex) appNav()
  }
})

const appNav = function () {
  const navWrapper = document.getElementsByClassName('nav-wrapper')
  const navActive = navToggle(navWrapper)

  const navButton = document.getElementById('nav-button')
  navButton.addEventListener('click', () => {
    appNav()

    // transform: translate(10rem, 6rem);

    return navActive
  })
}
appNav()

// navButton.addEventListener('click', navWrapperShow())

// V2
// const App = document.getElementById('App')
// const nav = document.getElementById('nav')
// const navList = document.getElementsByClassName('nav-list')[0]
// const navButton = document.getElementById('nav-button')

// navButton.addEventListener('click', () => {
//   navButton.classList.toggle('nav-button--active')

//   App.classList.toggle('app--effect')
//   navList.classList.toggle('nav-list--active')
//   nav.classList.toggle('nav--active')
// })
