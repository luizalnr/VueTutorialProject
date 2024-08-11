<template>
    <header>
      <nav class="container">
        <a href="/">
          <img
            alt="WDEV"
            id="logo"
            src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
          />
        </a>
  
        <img
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg"
          alt="Abrir menu"
          id="menu-button"
          @click="toggleMenu"
        />
  
        <!-- Overlay que fecha o menu ao clicar -->
        <div id="menu-overlay" v-if="menuActive" @click="closeMenu"></div>
  
        <!-- Menu lateral -->
        <div id="menu-items" :class="{active:menuActive}">
          <a href="/">
            <img
              alt="WDEV"
              id="menu-logo"
              src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
            />
          </a>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/videos">Videos</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "AppHeader",
    data() {
      return {
        menuActive: false,
      }
    }
  }
  </script>
  
  <style scoped>
  header {
    background-color: var(--color-background-nav);
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
  }
  
  #logo {
    width: 130px;
  }
  
  #menu-button {
    width: 30px;
    cursor: pointer;
  }
  
  #menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 0.8;
    z-index: 10;
  }
  
  #menu-logo {
    width: 110px;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  
  #menu-items {
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 20;
    transition: transform 0.3s ease-in-out;
  }
  
  #menu-items .active{
    display: flex;
  }

  ul {
    list-style: none;
    text-align: center;
    padding: 0;
  }
  
  ul li {
    margin: 20px 0;
  }
  
  ul li a {
    color: var(--color-text-light);
    text-decoration: none;
    font-size: 18px;
  }
  </style>
  