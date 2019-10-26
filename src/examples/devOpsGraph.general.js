const devOpsGraph = {
  groups: [
    {
      id: 100,
      label: 'Qualidade do Código',
      color: '#AC92EB',
    },
    {
      id: 200,
      label: 'Configuração como código',
      color: '#4FC1E8',
    },
    {
      id: 300,
      label: 'Gestão dos Builds',
      color: '#A0D568',
    },
    {
      id: 400,
      label: 'Gestão de Testes',
      color: '#FFCE54',
    },
    {
      id: 500,
      label: 'Testes de Carga',
      color: '#ED5564',
    },
    {
      id: 600,
      label: 'Gestão de Configuração',
      color: '#FF0000',
    },
    {
      id: 700,
      label: 'Gestão de Release',
      color: '#00FF00',
    },
    {
      id: 800,
      label: 'Monitoração de Aplicações',
      color: '#0000FF',
    },
  ],
  nodes: [
    {
      id: 101,
      groupId: 100,
      label: 'QC1',
      title: 'Qualidade do Código - Inicial',
      details: '- Ausência de padrões de codificação.  \n- Qualidade depende de cada desenvolvedor.',
    },
    {
      id: 102,
      groupId: 100,
      label: 'QC2',
      title: 'Qualidade do Código - Consciente',
      details: '- Busca pela redução do tempo de ciclo e retrabalhos.  \n- Ações iniciais em projetos pilotos, com ferramentas de automação.  \n- Aproximação entre desenvolvimento, qualidade e operações.',
    },
    {
      id: 103,
      groupId: 100,
      label: 'QC3',
      title: 'Qualidade do Código - Gerenciado',
      details: '- Automação da revisão por pares.  \n- Verificação da qualidade ocorre em ambientes dedicados de integração.  \n- Geração de alertas e defeitos realizados por ferramentas.',
    },
    {
      id: 104,
      groupId: 100,
      label: 'QC4',
      title: 'Qualidade do Código - Avançado',
      details: '- Qualidade incorpora atributos de qualidade tais como performance, segurança e usabilidade.  \n- Verificação da qualidade opera consistentemente em base diária por automações.',
    },
    {
      id: 105,
      groupId: 100,
      label: 'QC5',
      title: 'Qualidade do Código - Melhoria contínua',
      details: '- Verificação da qualidade é disparada no momento dos _commits_.  \n- Defeitos e não conformidades são resolvidos em base diária.  \n-_Dashboards_ de qualidade de código compartilhados publicamente.',
    },
    {
      id: 201,
      groupId: 200,
      label: 'CC1',
      title: 'Configuração como Código - Inicial',
      details: '- Trabalhos de configuração de ambientes, dados de testes, parâmetros e senhas são manuais.  \n- Cultura de _scripts_ ainda não foi estabelecidada.',
    },
    {
      id: 202,
      groupId: 200,
      label: 'CC2',
      title: 'Configuração como Código - Consciente',
      details: '- _Scripts_ de automação começam a ser criados.  \n- Compartilhamento de _scripts_ entre times de desenvolvimento, qualidade e operações.',
    },
    {
      id: 203,
      groupId: 200,
      label: 'CC3',
      title: 'Configuração como Código - Gerenciado',
      details: '- _Scripts_ para a maior parte dos trabalhos repetitivos.  \n- Repositórios de _scripts_ bem estabelecidos.  \n- Intenso compartilhamento de _scripts_ entre times.',
    },
    {
      id: 204,
      groupId: 200,
      label: 'CC4',
      title: 'Configuração como Código - Avançado',
      details: '- _Scripts_ para provisionamento de máquinas virtuais começam a ser desenvolvidos.  \n- Infraestrutura como código (IaC) aproxima o trabalho dos times de desenvolvimento e operações.',
    },
    {
      id: 205,
      groupId: 200,
      label: 'CC5',
      title: 'Configuração como Código - Melhoria Contínua',
      details: '- Infraestrutura como código (IaC) é prática comum.  \n- Sem fricção no provisionamento e configuração de ambientes.  \n- Sinergia entre desenvolvimento e operações.',
    },
  ],
  edges: [
    { id: 1, from: 101, to: 102 },
    { id: 2, from: 102, to: 103 },
    { id: 3, from: 103, to: 104 },
    { id: 4, from: 104, to: 105 },
    { id: 5, from: 201, to: 202 },
    { id: 6, from: 202, to: 203 },
    { id: 7, from: 203, to: 204 },
    { id: 8, from: 102, to: 204 },
    { id: 9, from: 204, to: 205 },
  ],
};

export default devOpsGraph;
