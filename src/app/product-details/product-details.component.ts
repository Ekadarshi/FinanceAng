import { Component, OnInit } from '@angular/core';
import{ProductServiceService} from'./../services/product-service.service';
import{ActivatedRoute, Router} from '@angular/router';
import{IProd} from './../model/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productdata : IProd = null;
  constructor(private productservice: ProductServiceService,private router:ActivatedRoute) { }

  getProductInfo(id:number){
    this.productservice.getData(id).subscribe((data:IProd)=>{
      this.productdata=data;
    })
  }
  selectedEmi: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
     
    this.selectedEmi = event.target.value;
  }
  ngOnInit(): void {
    const id =+ this.router.snapshot.paramMap.get('id');
    this.getProductInfo(id);
  }

}
