var validarFormulario=function(){
	var mensagem="";
	if($("#name").val()==""){
		mensagem+="Preencha o nome\n";
	}
	if($("#phone").val()==""){
		mensagem+="Preencha o telefone\n";
	}
	if($("#address").val()==""){
		mensagem+="Preencha o endereço\n";
	}
	if($("#email").val()==""){
		mensagem+="Preencha o email\n";	
	}
	if($("#description").val()==""){
		mensagem+="Preencha a descricção\n";
	}
	if(mensagem==""){
		return true;
	}
	else{
		alert(mensagem);
		return false;
	}			
}