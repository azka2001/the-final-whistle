async function init(){
    const token = await login();
    await getTodayMatches(token);
}
init();