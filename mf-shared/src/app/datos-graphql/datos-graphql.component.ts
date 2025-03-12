import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';

@Component({
  selector: 'app-datos-graphql',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datos-graphql.component.html',
  styleUrl: './datos-graphql.component.scss'
})
export class DatosGraphqlComponent  implements OnInit{
  private apollo = inject(Apollo);
  availableFields = ['name', 'status', 'species', 'image', 'gender', 'created'];
  loading = false;
  // Campos seleccionados por el usuario
  selectedFields: string[] = [];
  data$ = null;
  data_voluntaria = null;
  error: any;
  query = gql`
      query {
          characters(page: 2, filter: { name: "rick" }) {
            results {
              ${this.availableFields.join('\n')}
            }
          }
        }
    `;

  constructor() {}
  ngOnInit(): void {
    /*this.apollo.watchQuery<any>({
      query: this.query
    }).valueChanges.subscribe(({ data, loading }) => {
      this.data$ = data.characters.results
    });*/

    this.apollo.use('recaudacion')
      .query<any>({
        query: gql`
        query {
          voluntariaimportespendientes {
            edges {
              node {
                importePendiente
                importe
                deudores
                tributo
              }
            }
          }
        }
      `,
        fetchPolicy: 'network-only', // Ignorar la caché
      })
      .subscribe(({ data, loading }) => {
        debugger;
        this.data_voluntaria = data.characters.results;
        this.loading = false;
      });
    
  }

  // Método para agregar o quitar campos seleccionados
  toggleField(field: string) {
    if (this.selectedFields.includes(field)) {
      this.selectedFields = this.selectedFields.filter((f) => f !== field);
    } else {
      this.selectedFields = [...this.selectedFields, field];
    }
  }

  // Función para formatear la fecha en formato dd/mm/yyyy
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  }

  // Método para realizar la consulta dinámica
  fetchCharacters() {
    if (this.selectedFields.length === 0) {
      alert('Selecciona al menos un campo');
      return;
    }

    this.loading = true;

    // Construir la consulta dinámica
    const query = gql`
      query {
          characters(page: 2, filter: { name: "rick" }) {
            results {
              ${this.selectedFields.join('\n')}
            }
          }
        }
    `;

    this.apollo
      .query<any>({
        query: query,
        fetchPolicy: 'network-only', // Ignorar la caché
      })
      .subscribe(({ data, loading }) => {
        this.data$ = data.characters.results;
        this.loading = false;
      });

      /*this.graphqlService.queryEndpoint1().subscribe((result) => {
        debugger;
      });*/
  }

}
