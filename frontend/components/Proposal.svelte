<script lang=ts>
  import xmark from "../assets/x-mark.svg"
  import checkmark from "../assets/checkmark.svg"

  export let msg

  let yesV = msg.yesVotes / BigInt(100000000)
  let noV = msg.noVotes / BigInt(100000000)

  let sum = yesV + noV
  let n = sum / BigInt(100)
  
  

</script>

<div class="flex bg-dark-700 dark-gradient rounded-xl p-2 gap-3 max-w-2xl">
  <div class="flex flex-col gap-1">
    <button class="vote-button"><img src={checkmark} alt="Yes" class=""/></button>
    
    <button class="vote-button"><img src={xmark} alt="No"/></button>
  </div>
  <div>
    <p class="text-2xl mb-2">{msg.payload}</p>
    <!-- <p>{msg.userPrincipal.toString()}</p>
    <p>{msg.id}</p> -->
    <div class="flex text-center text-sm text-neutral-600 font-bold">
      <div class="bg-green-400 hover:bg-green-500 h-5 w-[{yesV ** n}%] rounded-l-md">
        {yesV.toString()}
      </div>
      <div class="bg-red-400 hover:bg-red-500 h-5 w-[{noV ** n}%] rounded-r-md">
        {noV.toString()}
      </div>
    </div>
    <!-- <p>Status: {post.status}</p>  -->
  </div>
  
  

</div>
