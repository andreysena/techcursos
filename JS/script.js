function funcao1()
			{
			/*Criamos a variável opcao através de um prompt de confirmação... True representa o Ok...*/	
			var opcao=confirm("Deseja realizar o download desse livro?")
			
			/*Esrutura de decisão...*/
			/*Se a opção do usuário for Ok...*/
			if (opcao==true)
			{
				confirm("Download concluído!")	
			}
			/*Caso contrário...*/
			else
			{
				confirm("Download cancelado...")
			}

			/*Retornando a Id da imagem...*/
			document.getElementById("down").innerHTML=opcao;
			}