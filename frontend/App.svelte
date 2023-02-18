<script lang="ts">
  import bars3 from "./assets/bars-3.svg"
  import home from "./assets/home.svg"
  import create from "./assets/create.svg"
  import polls from "./assets/polls.svg"

  import { createClient } from "@connect2ic/core"
  import { defaultProviders } from "@connect2ic/core/providers"
  import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/svelte"
  import "@connect2ic/core/style.css"
  import "./app.postcss"

  import * as dao from "../.dfx/local/canisters/dao"

  import { Router, Link, Route, useLocation } from "svelte-navigator";
  import Home from "./routes/Home.svelte";
	import Create from "./routes/Create.svelte";
  import Polls from "./routes/Polls.svelte";

  import Counter from "./components/Counter.svelte"
  import Profile from "./components/Profile.svelte"
  import Transfer from "./components/Transfer.svelte"
  import WalletMenu from "./components/WalletMenu.svelte"
  //import { connect } from "./components/Connect.ts"

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

  // const location = useLocation();
  // let url: any;

  // $:{
  //   url = $location.pathname;
  // }

  let NavVisible: boolean = false;

  const toggleNavVisible = () => {
    NavVisible = !NavVisible;
  }

</script>

<svelte:window bind:innerWidth={innerW}/>
<Connect2ICProvider client={client}>
  <div class="flex flex-col min-h-screen py-1 px-3 lg:px-6">
    <header class="flex gap-2 justify-space-between sticky top-0 py-2">
      <img 
        src={bars3} alt="navigation icon"
        class="sm:hidden hover:bg-dark-700 rounded-full w-10 h-10 p-1"
        on:focus on:mouseover={toggleNavVisible} on:keydown on:click={toggleNavVisible}
      />
      <p class="text-center text-3xl text-gradient">Defora</p>
     
      <div class="grow">
      <!-- middle, fill space -->
      
      </div>

      <div class="fancy-border"> 
        <!-- border should be added somehow thru app.postcss -->
        <ConnectButton/>
      </div>
      <WalletMenu/>
    </header>
    <ConnectDialog />
    
    <!-- <div class="flex flex-col align-items-center justify-content-center text-center p-2">
      <p class="h-auto text-5xl">DAO Polling/Voting title</p>
    </div> -->

    <!-- <div class="bg-black-900 h-56">some bar</div> -->

    <Router>
    <div class="flex grow gap-1 lg:gap-5">
      
        {#if NavVisible || innerW > 640}
          <nav class="flex flex-col text-teal-100 lg:-mx-2" on:mouseleave={toggleNavVisible}>
            <Link class="nav-link" to="/">
              <img src={home} alt="home icon" class="nav-link-svg"/>
              Home
            </Link>
            
            <Link class="nav-link" to="polls">
              <img src={polls} alt="polls icon" class="nav-link-svg"/>
              Polls
            </Link>
            
            <Link class="nav-link" to="create">
              <img src={create} alt="create icon" class="nav-link-svg"/>
              Create
            </Link>
          </nav>
        {/if}

        <content class="grow rounded-lg pt-2 text">
          <Route path="/" component={Home} />
          <Route path="create" component={Create} />
          <Route path="polls" component={Polls} />
        </content>
      
    </div>
    </Router>

    <footer class="h-fit m-auto text-dark-600/60">
      <p>Made by Wannes, Inspired and guided by Motoko Bootcamp 2023</p>
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
