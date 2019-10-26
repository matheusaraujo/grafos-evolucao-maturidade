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
  ],
  edges: [
    { id: 1, from: 101, to: 102 },
    { id: 2, from: 102, to: 103 },
    { id: 3, from: 103, to: 104 },
    { id: 4, from: 104, to: 105 },
  ],
};

export default devOpsGraph;
