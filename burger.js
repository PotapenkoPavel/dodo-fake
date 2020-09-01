;(function () {
  let toggle = document.getElementById('menu__toggle')
  let navbar = document.getElementById('navigation-burger')

  toggle.addEventListener('click', () => {
    let checked = toggle.checked
    document.body.style.overflow = checked ? 'hidden' : 'auto'
    navbar.style.display = checked ? 'block' : 'none'
  })

  window.addEventListener('resize', () => {
    toggle.checked = false
    document.body.style.overflow = 'auto'
    navbar.style.display = 'none'
  })
})()
