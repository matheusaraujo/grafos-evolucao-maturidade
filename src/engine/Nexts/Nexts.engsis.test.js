/* eslint-disable no-console */
import systemEngineerGraph from '../../examples/systemEngineerGraph.20182';
import Nexts from './Nexts';

describe('engine - Nexts - engis', () => {
  test('Nexts - engsis 20182', () => {
    const { nodes, edges } = systemEngineerGraph;
    const combinations = Nexts(nodes, edges, { minWeight: 195, maxWeight: 375, maxDistance: 3 });

    const mustLog = process.argv.some((a) => a.indexOf('engsis.test') !== -1);

    if (mustLog) {
      combinations.forEach((c, i) => {
        console.log({
          combinacao: (i + 1),
          distancia: c.distance,
          creditos: c.totalWeight,
          disciplinas: c.combination.map((c1) => `${c1.label} ${c1.title}`),
          horarios: c.slots,
        });
      });
    }
  });
});
