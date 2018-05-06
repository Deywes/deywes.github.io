/*
    Script simples que mostra os jogadores online do servidor informado
    e atualiza automaticamente sem precisar dar refresh na página.

    Autor: DevLeeo (devleeo@outlook.com)
    Data: 17/04/2015
 */

/* IP DO SERVIDOR */
const IP = "149.56.41.55";

/*  PORTA DO SERVIDOR */
const PORTA = 7777;

/*  DELAY EM SEGUNDOS QUE VAI ATUALIZAR. */
const UPDATE_DELAY_IN_SECONDS = 1;

/*  NOME DO ELEMENTO QUE IRA SER MOSTRADO OS JOGADORES ONLINE. */
const ELEMENT_ID = "online";

/* SCRIPT    */
window.onload = function ()
{
    var element = document.getElementById(ELEMENT_ID);

    element.innerHTML = "Carregando...";

    setInterval(function ()
    {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open("GET", "http://www.api.minetools.eu/ping/" + IP + "/" + PORTA, false);
        httpRequest.send("");

        var jsonResponse = JSON.parse(httpRequest.responseText);

        if (jsonResponse.Players == null)
        {
            element.innerHTML = jsonResponse.players.online + "/" + jsonResponse.players.max;
        }
        else
        {
            element.innerHTML = jsonResponse.Players + "/" + jsonResponse.MaxPlayers;
        }

    }, UPDATE_DELAY_IN_SECONDS * 1000);
};
