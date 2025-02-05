import { Component, OnInit } from '@angular/core'
import { Option, Options } from 'src/app/components/options/options.component'
import { ApplicationService, MacInfo } from 'src/app/services/app.service'
import { ConstantsService } from 'src/app/services/constants.service'
import { version } from '../../../../package.json'

@Component({
  selector: 'eqm-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  options: Options = [
    [
      {
        key: 'faq',
        type: 'button',
        label: 'FAQ',
        action: this.faq.bind(this)
      }, {
        key: 'report-bug',
        type: 'button',
        label: 'Report a Bug',
        action: this.reportBug.bind(this)
      }
    ]
  ]

  constructor (public app: ApplicationService, public CONST: ConstantsService) {}

  uiVersion = version
  info: MacInfo
  ngOnInit () {
    this.fetchInfo()
  }

  async fetchInfo () {
    this.info = await this.app.getMacInfo()
  }
  reportBug () {
    this.app.reportBug()
  }

  faq () {
    this.app.faq()
  }
}
