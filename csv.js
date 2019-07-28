function _gerarCsv(){
    let user = Number(document.querySelector("#ususario").value)
    let idservico = Number(document.querySelector("#IDServico").value)
    let motivo = document.querySelector('#motivo').value
    let date = new Date();
    let hora = date.getHours() + '.' + date.getMinutes() + '.' + date.getSeconds()
    let data = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + hora

    if(user == 0 || idservico == 0 || user == null || idservico == null || motivo == 0 || motivo == null)
        {alert('Usuário, ID do Serviço, ou Motivo para retoque estão inválidos')}
    else{
        csv = 'Data: ' + data + '\nUsuario: ' + user + '\nID: '+ idservico + '\nMotivo: ' + motivo
        let linkDonw = document.createElement('a')
        linkDonw.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv)
        linkDonw.target = '_blank'
        linkDonw.download = `${idservico}-${hora}.csv`
        linkDonw.click()
        window.location.replace("csv.html")
    }

}