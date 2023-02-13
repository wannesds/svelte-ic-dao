<script lang="ts">
  import home from "./assets/home.svg"

  import { createClient } from "@connect2ic/core"
  import { defaultProviders } from "@connect2ic/core/providers"
  import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/svelte"
  import "@connect2ic/core/style.css"
  import "./app.postcss"

  import * as dao from "../.dfx/local/canisters/dao"

  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";

  import Counter from "./components/Counter.svelte"
  import Profile from "./components/Profile.svelte"
  import Transfer from "./components/Transfer.svelte"
  import WalletMenu from "./components/WalletMenu.svelte"

  const client = createClient({
    canisters: {
      dao,
    },
    providers: defaultProviders,
    globalProviderConfig: {
      dev: import.meta.env.DEV,
    },
  })

  let innerW = 0;

  let NavVisible: boolean = false;

  function toggleNavVisible() {
    NavVisible = !NavVisible;
  }

</script>

<svelte:window bind:innerWidth={innerW}/>
<Connect2ICProvider client={client}>
  <div class="text-neutral-200 flex flex-col min-h-screen">
    <header class="flex gap-2 p-5 justify-space-between sticky top-0">
      <!-- <img src={home} alt="navigation icon" width="50px"/> -->
      <p class="text-center py-1 text-3xl text-gradient" on:focus on:mouseover={toggleNavVisible}>Defora</p>
     
      <div class="grow">
      <!-- middle, fill space -->
      </div>

      <div class=fancy-border> 
        <!-- border should be added somehow thru app.postcss -->
        <ConnectButton/>
      </div>
      <WalletMenu/>
    </header>
    <!-- <ConnectDialog /> -->
    
    <!-- <div class="flex flex-col align-items-center justify-content-center text-center p-2">
      <p class="h-auto text-5xl">DAO Polling/Voting title</p>
    </div> -->

    <!-- <div class="bg-black-900 h-56">some bar</div> -->

    <div class="flex grow">
      <Router> 
        {#if NavVisible || innerW > 500}
        <nav class="flex flex-col p-5" on:mouseleave={toggleNavVisible}>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
        </nav>
        {/if}

        <content class="grow">
          <Route path="/" component={Home} />
          <Route path="about" component={About} />
        </content>
      </Router>
    </div>

    <footer class="">
      <p>This is the footer</p>
    </footer>
    
    
  


<!-- 
    <p class="examples-title">
      Examples
    </p>-->
    <!-- <div class="examples">
      <Counter />
      <Profile />
      <Transfer />
    </div>  -->
  </div> 
</Connect2ICProvider>

<!-- 
<style global>
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #424242;
    }

    button {
        font-weight: 600;
    }

    .slogan {
        font-size: 1.7em;
        margin-bottom: 0;
    }

    .twitter {
        font-size: 0.4em;
    }

    .App-logo {
        height: 14vmin;
        pointer-events: none;
        transform: scale(1);
        animation: pulse 3s infinite;
    }

    .App-header {
        height: calc(100vh - 70px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
    }

    .examples {
        padding: 30px 100px;
        display: grid;
        grid-gap: 30px;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .examples-title {
        font-size: 1.3em;
        margin-bottom: 0;
        text-align: center;
    }

    .example {
        padding: 50px 50px;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /*border: 1px solid black;*/
        /*background: #f4f4f4;*/
        border-radius: 15px;
    }

    .example-disabled {
        font-size: 1.3em;
        color: #9e9e9e;
    }

    .demo-button {
        background: #a02480;
        padding: 0 1.3em;
        margin-top: 1em;
        border-radius: 60px;
        font-size: 0.7em;
        height: 35px;
        outline: 0;
        border: 0;
        cursor: pointer;
        color: white;
    }

    .demo-button:active {
        color: white;
        background: #979799;
    }

    .auth-section {
        padding: 1em;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-align: right;
        position: fixed;
        top: 0;
        right: 0;
    }

    @keyframes pulse {
        0% {
            transform: scale(0.97);
            opacity: 0;
        }

        70% {
            transform: scale(1);
            opacity: 1;
        }

        100% {
            transform: scale(0.97);
            opacity: 0;
        }
    }
</style> -->
