const todayMatchesEl = document.querySelector('.today-matches');

async function getTodayMatches(token){
    // const date = new Date();
    // const today =`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    // console.log(today);
    const res = await fetch(`${proxy}http://api.cup2022.ir/api/v1/bydate`,
    {
        method: 'POST' ,
        headers: {
            Authorization : 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
        body : JSON.stringify({
          date : '12/4/2022'
         }),
    });

    const data = await res.json();
    const matches = data.data;
    
    renderMatches(matches,todayMatchesEl);
}
const matchTypes ={
    'group' : 'Group Stage',
     R16 : 'Round of 16',
};
/* function compareDateToTodaysDate(date){
   const today = new Date();
   const tomorrow = new Date(new Date().setDate('12/4/2022'+ 1));
   const yesterday = new Date(new Date().setDate('12/4/2022'- 1));
 switch(date){
 
 }
}
*/

function renderMatches(matches,todayMatchesEl){
    let date, time, matchType;
    let matchesE1 = matches.map( match =>{

       //get Date and Time of the match
        [date,time] = match.local_date.split(' ');
        // format the date to, today, tomorrow, yesterday, 'Fri, Oct 10'
        date = compareDateToTodaysDate(new Date(date));

        //match type
        matchType = matchTypes[match.type];

        return `<div class="match-container">
        <div class="group">
            <h4>${
                matchType === 'Group Stage'? 'Group' + match.group: matchType
            }</h4>
        </div>
       <div class="match">
        <div class="teams">
            <div class="team home-team">
                <div class="info">
                    <img
                    class = 'flag' 
                    src="${match.home_flag}" 
                    alt="${match.home_team_en}">
                    <div class="name">${match.home_team_en}</div>
                </div>
                <div class="score">${match.home_score}</div>
            </div>
            <div class="team  away-team">
            <div class="info">
            <img
            class = 'flag' 
            src="${match.away_flag}" 
            alt="${match.away_team_en}">
            <div class="name">${match.away_team_en}</div>
        </div>
        <div class="score">${match.away_score}</div>
            </div>
            </div>
            <div class="match-state">
                <div class="state"> Finished </div>
            <div class="date">Sat, May 5 </div>
            <div class="time">18:00</div>
            </div>
            </div>
            </div>`
            
    } )
    todayMatchesEl.innerHTML =    
    `<div class="matches">
    <div class="stage">
      <h3>${matchType} - ${date}</h3>  
    </div>
    <div class="container">
     ${matchesE1}
                </div>
                </div>
                ` ;
}

