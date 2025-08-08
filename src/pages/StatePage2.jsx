import api from '../api/axiosConfig';
import React, { useEffect, useState } from 'react';

function StatePage2() {
  const [estadisticas, setEstadisticas] = useState([]);

  useEffect(() => {
    const traerEstadisticas = async () => {
      try {
        const response = await api.get('/estadisticas');
        const est = Object.entries(response.data);
        setEstadisticas(est);
        console.log(est);
      } catch (error) {
        console.error('Error al traer las estadísticas', error);
      }
    };

    traerEstadisticas();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Usuario</th>
          <th>Ganadas</th>
          <th>Empatadas</th>
          <th>Perdidas</th>
          <th>Promedio de Partidas Ganadas</th>
        </tr>
      </thead>
      <tbody>
        {estadisticas.map(([nombre, est]) => {
          const total = est.ganadas + est.empatadas + est.perdidas;
          const promedio = total > 0 ? (est.ganadas / total).toFixed(2) : "0.00";

          return (
            <tr key={nombre}>
              <td>{nombre}</td>
              <td>{est.ganadas}</td>
              <td>{est.empatadas}</td>
              <td>{est.perdidas}</td>
              <td>{promedio}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StatePage2;
