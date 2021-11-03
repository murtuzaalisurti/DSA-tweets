const tweets_skeleton = document.querySelector('.tweets-skeleton');
const tweet_skeleton = document.querySelector('.tweet-skeleton');
const tweets_container = document.querySelector(".tweets");
const all_tweets = document.querySelectorAll(".tweets .tweet");
const load_btn = document.querySelector(".see-more");

for (let i = 0; i < 5; i++) {
    tweets_skeleton.append(tweet_skeleton.cloneNode(true));
}

for(let j = 0; j < all_tweets.length; j++){
    all_tweets[j].id = `tweet-${j+1}`;

    if(j > 5){
        all_tweets[j].style = `display: none`;
    }
}


let visible_tweet_count = 0;
function count_visible_tweets(){
    for(let j = 0; j < all_tweets.length; j++){
        if(all_tweets[j].style.display != 'none'){
            visible_tweet_count++;
        }
    }
}
count_visible_tweets();

load_btn.addEventListener("click", () => {
    let last_visible_tweet_index = visible_tweet_count - 1;
    let visible_upto_tweet_index = last_visible_tweet_index + 6;
    let tweets_to_be_shown = visible_upto_tweet_index - last_visible_tweet_index;

    if(visible_upto_tweet_index > (all_tweets.length - 1)){
        for(let k = last_visible_tweet_index+1; k < all_tweets.length; k++ ){
            all_tweets[k].style = "";
        }
    } else {
        for(let k = last_visible_tweet_index+1; k <= visible_upto_tweet_index; k++ ){
            all_tweets[k].style = "";
        }
    }
    visible_tweet_count = 0;
    count_visible_tweets();

    console.log(visible_tweet_count)
    if(visible_tweet_count == Number(17)){
        console.log(1);
        load_btn.parentElement.style.display = 'none';
    }
})

setTimeout(() => {
    load_btn.parentElement.style = "";
    document.querySelector(".tweets").style = "visibility: hidden;";
    tweets_skeleton.style = "display: none;";
}, 5000);