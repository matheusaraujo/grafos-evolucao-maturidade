Script de conversão dos dados em planilha para o objeto JSON do projeto.

- **Exemplos de planinhas**:
  - [Versão 20182 da grade de Engenharia de Sistemas](https://docs.google.com/spreadsheets/d/1hF4xBMX--hamxL_LiNDSQGPVxYjHr8zD2afMjXCAt8Y/edit#gid=890497792)
  - [Versão 2020 da grade de Engenharia de Sistemas](https://docs.google.com/spreadsheets/d/1dZiipxHcmvAMPaZEVxyI7MVRsowWrZ9RAuHwy1QmBSQ/edit#gid=890497792)
  - *Feito em 2019-02

- Pra executar  
  - `npm start file.tsv`
  - `file` é o arquivo de entrada, deve estar na mesma pasta do script
  - Será criado o arquivo com o stringfy do objeto criado
  
- Arquivo `tsv`, separado por `tab`
- Ordem das colunas
  - `label`
  - `title`
  - `preCodes` - _internamente separador por vírgulas_
  - `weight`
  - `level`
  - `groupId`
  - `type` - _não utilizado_
  - `subGroupId`
  - `details`  
  - `slots` - _internamente separador por vírgulas_
  - `status` - _0 ou 1_


  