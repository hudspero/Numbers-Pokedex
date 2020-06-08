import React from 'react';
import _ from 'lodash';

const Pokedex = ({ dexEntry, numberResponse }) => {
   return (
      <div className="pokedex">
         <table>
            <tbody>
               <tr>
                  <td id="picture">
                     <img src={_.result(dexEntry, 'sprites.front_default')} alt='' />
                  </td>
                  <td>
                     <tr>
                        <td id="name">{dexEntry.name}</td>
                     </tr>
                     <tr>
                        <td id="entrynumber">{dexEntry.id}</td>
                     </tr>
                     <tr>
                        <td id="types">{_.result(dexEntry, 'types[0].type.name')} {_.result(dexEntry, 'types[1].type.name')}</td>
                     </tr>
                  </td>
                  <td id="description" rowSpan="2">{numberResponse}</td>
               </tr>
               <tr>
                  <td id="stats" colSpan="2">
                     <ul>
                        <li>Height: {dexEntry.height} dm</li>
                        <li>Weight: {dexEntry.weight} hg</li>
                        <li>HP: {_.result(dexEntry, 'stats[0].base_stat')}</li>
                        <li>Attack: {_.result(dexEntry, 'stats[1].base_stat')}</li>
                        <li>Defense: {_.result(dexEntry, 'stats[2].base_stat')}</li>
                        <li>Sp Att: {_.result(dexEntry, 'stats[3].base_stat')}</li>
                        <li>Sp Def: {_.result(dexEntry, 'stats[4].base_stat')}</li>
                        <li>Speed: {_.result(dexEntry, 'stats[5].base_stat')}</li>
                     </ul>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}

export default Pokedex