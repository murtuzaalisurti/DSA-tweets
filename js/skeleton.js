const tweets_skeleton = document.querySelector('.tweets-skeleton');
const tweet_skeleton = document.querySelector('.tweet-skeleton');
for (let i = 0; i < 5; i++) {
    tweets_skeleton.append(tweet_skeleton.cloneNode(true));
}

setTimeout(() => {
    document.querySelector(".tweets").style = "visibility: hidden;";
    tweets_skeleton.style = "display: none;";
}, 5000);