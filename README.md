Video sobre o projeto: https://youtube.com/shorts/ghKI30yZGvQ?feature=share

Calculadora de IMC

Trabalho de PAM desenvolvido em React Native com Expo que calcula o Índice de Massa Corporal (IMC), exibe a classificaçãoc e também o peso ideal com base na altura informada. Além disso, oferece uma tela informativa com detalhes sobre o IMC.



Funcionalidades

- Entrada de altura(em metros) e peso(em kg)
- Cálculo do IMC
- Exibição da classificação do IMC:
  - Abaixo do peso
  - Peso normal
  - Sobrepeso
  - Obesidade grau 1
  - Obesidade grau 2
  - Obesidade grau 3 (mórbida)
- Cálculo do peso ideal mínimo e máximo
- Tela adicional com informações sobre o IMC
- Layout simples, responsivo e agradável



Fórmulas Utilizadas

- IMC = peso / (altura × altura)
- Peso Ideal Mínimo = 18.5 × altura²
- Peso Ideal Máximo = 24.9 × altura²


- React Native
- Expo
- React Navigation

O projeto é estruturado da seguinte maneira:

App.js
Arquivo principal que inicializa a navegação entre as telas.

Usa o NavigationContainer e createNativeStackNavigator para definir a tela principal (Home) e a tela informativa (InfoIMC).

Home.js
Contém o layout principal da aplicação.

Title: Exibe o título da aplicação.

FormIMC: Componente de formulário que calcula e exibe o IMC.

Botão “Saiba mais sobre o IMC” que navega para a tela InfoIMC."

FormIMC.js
Componente responsável por:

Receber os dados de entrada (altura e peso).

Calcular o IMC com base na fórmula:
IMC = peso / (altura × altura)

Exibir:

O valor do IMC arredondado

A classificação do IMC com base na tabela oficial

O peso ideal (mínimo e máximo) calculado com base na altura

IMCClassification.js
Componente que recebe o IMC como prop e retorna o texto correspondente à classificação:

Abaixo do peso

Peso normal

Sobrepeso

Obesidade grau 1, 2 ou 3

IdealWeight.js
Calcula e exibe o intervalo de peso ideal com base na altura:

Mínimo = 18.5 × altura²

Máximo = 24.9 × altura²

InfoIMC.js
Tela adicional com informações detalhadas sobre o que é o IMC, como é calculado e por que ele é importante.

Como executar o projeto:

Clone o repositório com o comando: git clone https://github.com/SeuUsuario/CalculadoraIMC.git

Acesse o diretório do projeto: cd CalculadoraIMC

Instale as dependências com: npm install

Inicie o projeto com: npx expo start

Certifique-se de ter o Node.js e o Expo CLI instalados em sua máquina. O app pode ser testado utilizando o Expo Go no celular.

O projeto foi desenvolvido com foco em aplicar os conceitos aprendidos em aula, como componentização, uso de estados (useState), passagem de propriedades (props) e navegação entre telas. Além disso, o layout foi pensado para ser simples, intuitivo e funcional.

Este projeto também foi apresentado em um vídeo explicativo, onde são demonstradas suas funcionalidades e a implementação dos conceitos aprendidos.


