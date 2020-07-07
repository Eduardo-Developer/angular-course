import { ProdutoAppComponent } from './componentes/produto.app.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { NgModule } from '@angular/core';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { RouterModule, Routes } from '@angular/router';


const produtoRouterConfig: Routes = [
    {
        path: '', component: ProdutoAppComponent,
        children: [
            { path: 'editar/:id', component: EditarProdutoComponent },
            { path: '', component: ProdutoDashboardComponent },

        ]
    },

];

@NgModule({

    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [
        RouterModule
    ]

})
export class ProdutoRoutingModule { }
