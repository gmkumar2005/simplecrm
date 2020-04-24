import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { FileUploadService } from '../../services/file-upload.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  templateUrl: 'reports.component.html'
})
export class ReportsComponent implements OnInit {
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  tabledata = [{ "id": 1, "date_time": "2020-03-11", "report_name": "11032020Payoutaxre.pdf", "generated_by": "Alli Crass", "report_type": "payout" },
  { "id": 2, "date_time": "2020-03-26", "report_name": "03262020qbzxrea.txt", "generated_by": "Alli Crass", "report_type": "quickbook" },
  { "id": 3, "date_time": "2020-01-20", "report_name": "01202020qbzxreb.txt", "generated_by": "Kathlin Rolfe", "report_type": "quickbook" },
  { "id": 4, "date_time": "2020-01-14", "report_name": "0114202Payoutazrf", "generated_by": "Alli Crass", "report_type": "payout" },
  { "id": 5, "date_time": "2020-03-13", "report_name": "03132020qbzxrec.txt", "generated_by": "Kathlin Rolfe", "report_type": "quickbook" },
  { "id": 6, "date_time": "2020-01-20", "report_name": "01202020qbzxred.txt", "generated_by": "Alli Crass", "report_type": "quickbook" },
  { "id": 7, "date_time": "2020-01-15", "report_name": "01152020Payoutaxred.xls", "generated_by": "Kathlin Rolfe", "report_type": "payout" }]


  exportQuickBook: FormGroup;
  generatereport: FormGroup;
  constructor(private toastrservice: ToastrService) {
    this.exportQuickBook = new FormGroup({
      startdate: new FormControl('', [Validators.required]),
      enddate: new FormControl('', [Validators.required]),
    })

    this.generatereport = new FormGroup({
      user: new FormControl('', [Validators.required]),
      month: new FormControl('', [Validators.required]),
    });

  }
  ngOnInit(): void {
    this.sortdata();
  }

  sortdata(){
    this.tabledata = this.tabledata.sort((a, b) => {
      return b.id - a.id
    })
  }

  exportquickbook() {
    this.toastrservice.success("Your export will be available shortly.");
    setTimeout(() => {
      this.tabledata.push(
        { "id": this.tabledata.length + 1, "date_time": moment().format('YYYY-MM-DD'), "report_name": "quickbook_" + moment(this.exportQuickBook.value.startdate).format("YYYY_MM_DD") + "-" + moment(this.exportQuickBook.value.enddate).format("YYYY_MM_DD") + ".txt", "generated_by": "Carie Casserly", "report_type": "quickbook" }
      )
      this.sortdata();
    }, 3000);
  }


  generate() {
    this.toastrservice.success("Your payout report will be available shortly.");
    setTimeout(() => {
      this.tabledata.push(
        { "id": this.tabledata.length + 1, "date_time": moment().format('YYYY-MM-DD'), "report_name": "report_" + moment().format("YYYY_MM_DD") + ".xls", "generated_by": "Carie Casserly", "report_type": "payout" }
      )
      this.sortdata();
    }, 3000);
  }
}
