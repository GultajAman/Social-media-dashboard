const socialMediaStatsContainer = document.querySelector(".card");

const firstData = [
  {
    socialMedia: "facebook",
    accountName: "@nathanf",
    followerCount: "1987",
    todayStats: 12,
    increase: true,
  },
  {
    socialMedia: "twitter",
    accountName: "@nathanf",
    followerCount: "1044",
    todayStats: 99,
    increase: true,
  },
  {
    socialMedia: "instagram",
    accountName: "@realnathanf",
    followerCount: "11K",
    todayStats: 1099,
    increase: true,
  },
  {
    socialMedia: "youtube",
    accountName: "@nathan F.",
    followerCount: "8239",
    todayStats: 144,
    increase: false,
  },
];

firstData.forEach(data => {
  const cardSingle = document.createElement('div');
  cardSingle.classList.add('card__single', 'card__single--blue');

  const accountDiv = document.createElement('div');
  accountDiv.classList.add('card__account');
  const accountImg = document.createElement('img');
  accountImg.src = `images/icon-${data.socialMedia}.svg`
  const accountSpan = document.createElement('span');
  accountSpan.textContent = `${data.accountName}`;
  accountDiv.append(accountImg, accountSpan)

  const followerDiv = document.createElement('div');
  followerDiv.classList.add('card__follower');
  const countSpan = document.createElement('span');
  countSpan.textContent = `${data.followerCount}`;
  countSpan.classList.add('card__follower-count');
  const textSpan = document.createElement('span');
  textSpan.textContent = `${data.socialMedia === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS'}`;
  textSpan.classList.add('card__follower-text');
  followerDiv.append(countSpan, textSpan);


  const dateDiv = document.createElement('div');
  dateDiv.classList.add('card__date');
  dateDiv.setAttribute('class', `${data.increase ? 'card__date' : 'card__date card__date--red'}`);
  const dateImg = document.createElement('img');
  dateImg.src = `images/${data.increase ? 'arrow' : 'arrow2'}.png`
  const dateParag = document.createElement('p');
  dateParag.textContent = `${data.todayStats} Today`;
  dateDiv.append(dateImg, dateParag);

  cardSingle.append(accountDiv, followerDiv, dateDiv);
  socialMediaStatsContainer.append(cardSingle);
  console.log(socialMediaStatsContainer);
});

const overviewOfTodayContainer = document.querySelector('.card2');

const overviewDatas = [
  {
    type: 'Page Views',
    socialMedia: 'facebook',
    dailyStats: '87',
    todayStats: '3%',
    increase: true
  },
  {
    type: 'Likes',
    socialMedia: 'facebook',
    dailyStats: '52',
    todayStats: '2%',
    increase: false
  },
  {
    type: 'Likes',
    socialMedia: 'instagram',
    dailyStats: '5462',
    todayStats: '2257%',
    increase: true
  },
  {
    type: 'Profile Views',
    socialMedia: 'instagram',
    dailyStats: '52K',
    todayStats: '1375%',
    increase: true
  },
  {
    type: 'Retweets',
    socialMedia: 'twitter',
    dailyStats: '117',
    todayStats: '303%',
    increase: true
  },
  {
    type: 'Likes',
    socialMedia: 'twitter',
    dailyStats: '507',
    todayStats: '553%',
    increase: true
  },
  {
    type: 'Likes',
    socialMedia: 'youtube',
    dailyStats: '107',
    todayStats: '19%',
    increase: false
  },
  {
    type: 'Total Views',
    socialMedia: 'youtube',
    dailyStats: '1407',
    todayStats: '12%',
    increase: false
  },
];

overviewDatas.forEach(overviewData => {
  // container for all
  const cardOverview = document.createElement('div');
  cardOverview.classList.add('card__overview');
 

  // first container
  const cardView = document.createElement('div');
  cardView.classList.add('card__view');
  const cardViewText = document.createElement('p');
  cardViewText.classList.add('card__view-text');
  cardViewText.textContent = `${overviewDatas.type}`
  // console.log(cardViewText);
  const cardViewCount = document.createElement('p');
  cardViewCount.classList.add('card__view-count');
  cardViewCount.textContent = `${overviewDatas.dailyStats}`
  cardView.append(cardViewCount, cardViewText);
  // console.log(cardView);

  // second container
  const cardSocialMedia = document.createElement('div');
  cardSocialMedia.classList.add('card__social-media');
  const cardImg = document.createElement('img');
  cardImg.src = `images/icon-${overviewDatas.socialMedia}.svg`
  const cardDate = document.createElement('div');
  cardDate.classList.add('card__date');
  const cardDateImg = document.createElement('img');
  cardDateImg.src = `images/${overviewDatas.increase ? 'arrow' : 'arrow2'}.png`
  const cardDateParag = document.createElement('p');
  cardDateParag.textContent = `${overviewDatas.todayStats}`
  cardDate.append(cardDateImg, cardDateParag);
  cardSocialMedia.append(cardImg, cardDate);
  // console.log(cardSocialMedia);

  cardOverview.append(cardView, cardSocialMedia);
  overviewOfTodayContainer.append(cardOverview);
  console.log(overviewOfTodayContainer);
})