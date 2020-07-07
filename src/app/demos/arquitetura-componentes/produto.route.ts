import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { NgModule } from '@angular/core';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { RouterModule, Routes } from '@angular/router';


const produtoRouterConfig: Routes = [
    { path: '', component: ProdutoDashboardComponent },
    { path: 'editar/:id', component: EditarProdutoComponent }
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
