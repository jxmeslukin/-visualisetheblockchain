var blockList = []

const init = async () => {

  console.log("test")
  const { bitcoin: { blocks } } = mempoolJS({
    hostname: 'mempool.space'
  });

  const getBlocks = await blocks.getBlocks({ start_height: 698777 });

  var newBlocks = JSON.stringify(getBlocks, undefined, 2);

  console.log(newBlocks)

  blockList.push(newBlocks);
  var cleanedList = $.unique(blockList)
  console.log(cleanedList);



  


}

init();

function httpGet()
{

  fetch("https://blockchain.info/latestblock")
    .then((response) => {
      return response.json();
    })

}

httpGet();

const url = 'https://blockchain.info/latestblock';

let data = {
  hash
}

let request = new Request(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: new Headers({
    'Content-Type': 'application/json; charset=UTF-8'
  })
});

fetch(request)
  .then(function() {
    // Handle response you get from the API
  });


