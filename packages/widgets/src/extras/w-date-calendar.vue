<template>
  <div class="w-date-calendar">
    <div kendo-calendar class="k-widget k-calendar k-calendar-infinite" role="grid" tabindex="0" aria-disabled="false">
      <div kendo-calendar-navigation class="k-calendar-navigation">
        <span class="k-calendar-navigation-highlight"></span>
        <div kendo-virtualization class="k-content k-scrollable">
          <ul class="k-reset" style="transform: translateY(0px);">
            <li data-date-index="0"><span>Apr</span></li>
            <li data-date-index="1"><span>May</span></li>
            <li data-date-index="2"><span>Jun</span></li>
            <li data-date-index="3"><span>Jul</span></li>
            <li data-date-index="4"><span>Aug</span></li>
            <li data-date-index="5"><span>Sep</span></li>
            <li data-date-index="6"><span>Oct</span></li>
            <li data-date-index="7"><span>Nov</span></li>
            <li data-date-index="8"><span>Dec</span></li>
            <li data-date-index="9"><span class="k-calendar-navigation-marker">2020</span></li>
            <li data-date-index="10"><span>Feb</span></li>
            <li data-date-index="11"><span>Mar</span></li>
            <li data-date-index="12"><span>Apr</span></li>
            <li data-date-index="13"><span>May</span></li>
            <li data-date-index="14"><span>Jun</span></li>
            <li data-date-index="15"><span>Jul</span></li>
            <li data-date-index="16"><span>Aug</span></li>
            <li data-date-index="17"><span>Sep</span></li>
            <li data-date-index="18"><span>Oct</span></li>
            <li data-date-index="19"><span>Nov</span></li>
            <li data-date-index="20"><span>Dec</span></li>
            <li data-date-index="21"><span class="k-calendar-navigation-marker">2021</span></li>
            <li data-date-index="22"><span>Feb</span></li>
            <li data-date-index="23"><span>Mar</span></li>
            <li data-date-index="24"><span>Apr</span></li>
            <li data-date-index="25"><span>May</span></li>
            <li data-date-index="26"><span>Jun</span></li>
            <li data-date-index="27"><span>Jul</span></li>
            <li data-date-index="28"><span>Aug</span></li>
            <li data-date-index="29"><span>Sep</span></li>
          </ul>
          <div class="k-scrollable-placeholder" style="height: 0px;"></div>
        </div>
      </div>
      <div kendo-calendar-viewlist class="k-calendar-view k-calendar-yearview">
        <div kendo-calendar-header class="k-calendar-header">
          <span class="k-button k-bare k-title">2027</span>
          <span class="k-today">TODAY</span>
        </div>
        <div kendo-virtualization tabindex="-1" class="k-content k-scrollable">
          <table style="transform: translateY(0px);">
            <tbody role="rowgroup">
              <tr role="row"><th scope="col" colspan="5">2027</th></tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="0:0" aria-selected="false" title="2027 Jan"><span class="k-link">Jan</span></td>
                <td role="gridcell" data-cell-index="0:1" aria-selected="false" title="2027 Feb"><span class="k-link">Feb</span></td>
                <td role="gridcell" data-cell-index="0:2" aria-selected="false" title="2027 Mar"><span class="k-link">Mar</span></td>
                <td role="gridcell" class="k-state-selected" data-cell-index="0:3" aria-selected="false" title="2027 Apr"><span class="k-link">Apr</span></td>
                <td role="gridcell" class="k-today" data-cell-index="0:4" aria-selected="false" title="2027 May"><span class="k-link">May</span></td>
              </tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="1:0" aria-selected="false" title="2027 Jun"><span class="k-link">Jun</span></td>
                <td role="gridcell" data-cell-index="1:1" aria-selected="false" title="2027 Jul"><span class="k-link">Jul</span></td>
                <td role="gridcell" data-cell-index="1:2" aria-selected="false" title="2027 Aug"><span class="k-link">Aug</span></td>
                <td role="gridcell" data-cell-index="1:3" aria-selected="false" title="2027 Sep"><span class="k-link">Sep</span></td>
                <td role="gridcell" data-cell-index="1:4" aria-selected="false" title="2027 Oct"><span class="k-link">Oct</span></td>
              </tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="2:0" aria-selected="false" title="2027 Nov"><span class="k-link">Nov</span></td>
                <td role="gridcell" data-cell-index="2:1" aria-selected="false" title="2027 Dec"><span class="k-link">Dec</span></td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
              </tr>
            </tbody>
            <tbody role="rowgroup">
              <tr role="row"><th scope="col" colspan="5">2028</th></tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="0:0" aria-selected="false" title="2028 Jan"><span class="k-link">Jan</span></td>
                <td role="gridcell" data-cell-index="0:1" aria-selected="false" title="2028 Feb"><span class="k-link">Feb</span></td>
                <td role="gridcell" data-cell-index="0:2" aria-selected="false" title="2028 Mar"><span class="k-link">Mar</span></td>
                <td role="gridcell" data-cell-index="0:3" aria-selected="false" title="2028 Apr"><span class="k-link">Apr</span></td>
                <td role="gridcell" data-cell-index="0:4" aria-selected="false" title="2028 May"><span class="k-link">May</span></td>
              </tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="1:0" aria-selected="false" title="2028 Jun"><span class="k-link">Jun</span></td>
                <td role="gridcell" data-cell-index="1:1" aria-selected="false" title="2028 Jul"><span class="k-link">Jul</span></td>
                <td role="gridcell" data-cell-index="1:2" aria-selected="false" title="2028 Aug"><span class="k-link">Aug</span></td>
                <td role="gridcell" data-cell-index="1:3" aria-selected="false" title="2028 Sep"><span class="k-link">Sep</span></td>
                <td role="gridcell" data-cell-index="1:4" aria-selected="false" title="2028 Oct"><span class="k-link">Oct</span></td>
              </tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="2:0" aria-selected="false" title="2028 Nov"><span class="k-link">Nov</span></td>
                <td role="gridcell" data-cell-index="2:1" aria-selected="false" title="2028 Dec"><span class="k-link">Dec</span></td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
              </tr>
            </tbody>
            <tbody role="rowgroup">
              <tr role="row"><th scope="col" colspan="5">2029</th></tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="0:0" aria-selected="false" title="2029 Jan"><span class="k-link">Jan</span></td>
                <td role="gridcell" data-cell-index="0:1" aria-selected="false" title="2029 Feb"><span class="k-link">Feb</span></td>
                <td role="gridcell" data-cell-index="0:2" aria-selected="false" title="2029 Mar"><span class="k-link">Mar</span></td>
                <td role="gridcell" data-cell-index="0:3" aria-selected="false" title="2029 Apr"><span class="k-link">Apr</span></td>
                <td role="gridcell" data-cell-index="0:4" aria-selected="false" title="2029 May"><span class="k-link">May</span></td>
              </tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="1:0" aria-selected="false" title="2029 Jun"><span class="k-link">Jun</span></td>
                <td role="gridcell" data-cell-index="1:1" aria-selected="false" title="2029 Jul"><span class="k-link">Jul</span></td>
                <td role="gridcell" data-cell-index="1:2" aria-selected="false" title="2029 Aug"><span class="k-link">Aug</span></td>
                <td role="gridcell" data-cell-index="1:3" aria-selected="false" title="2029 Sep"><span class="k-link">Sep</span></td>
                <td role="gridcell" data-cell-index="1:4" aria-selected="false" title="2029 Oct"><span class="k-link">Oct</span></td>
              </tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="2:0" aria-selected="false" title="2029 Nov"><span class="k-link">Nov</span></td>
                <td role="gridcell" data-cell-index="2:1" aria-selected="false" title="2029 Dec"><span class="k-link">Dec</span></td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
              </tr>
            </tbody>
            <tbody role="rowgroup">
              <tr role="row"><th scope="col" colspan="5">2030</th></tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="0:0" aria-selected="false" title="2030 Jan"><span class="k-link">Jan</span></td>
                <td role="gridcell" data-cell-index="0:1" aria-selected="false" title="2030 Feb"><span class="k-link">Feb</span></td>
                <td role="gridcell" data-cell-index="0:2" aria-selected="false" title="2030 Mar"><span class="k-link">Mar</span></td>
                <td role="gridcell" data-cell-index="0:3" aria-selected="false" title="2030 Apr"><span class="k-link">Apr</span></td>
                <td role="gridcell" data-cell-index="0:4" aria-selected="false" title="2030 May"><span class="k-link">May</span></td>
              </tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="1:0" aria-selected="false" title="2030 Jun"><span class="k-link">Jun</span></td>
                <td role="gridcell" data-cell-index="1:1" aria-selected="false" title="2030 Jul"><span class="k-link">Jul</span></td>
                <td role="gridcell" data-cell-index="1:2" aria-selected="false" title="2030 Aug"><span class="k-link">Aug</span></td>
                <td role="gridcell" data-cell-index="1:3" aria-selected="false" title="2030 Sep"><span class="k-link">Sep</span></td>
                <td role="gridcell" data-cell-index="1:4" aria-selected="false" title="2030 Oct"><span class="k-link">Oct</span></td>
              </tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="2:0" aria-selected="false" title="2030 Nov"><span class="k-link">Nov</span></td>
                <td role="gridcell" data-cell-index="2:1" aria-selected="false" title="2030 Dec"><span class="k-link">Dec</span></td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
              </tr>
            </tbody>
            <tbody role="rowgroup">
              <tr role="row"><th scope="col" colspan="5">2031</th></tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="0:0" aria-selected="false" title="2031 Jan"><span class="k-link">Jan</span></td>
                <td role="gridcell" data-cell-index="0:1" aria-selected="false" title="2031 Feb"><span class="k-link">Feb</span></td>
                <td role="gridcell" data-cell-index="0:2" aria-selected="false" title="2031 Mar"><span class="k-link">Mar</span></td>
                <td role="gridcell" data-cell-index="0:3" aria-selected="false" title="2031 Apr"><span class="k-link">Apr</span></td>
                <td role="gridcell" data-cell-index="0:4" aria-selected="false" title="2031 May"><span class="k-link">May</span></td>
              </tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="1:0" aria-selected="false" title="2031 Jun"><span class="k-link">Jun</span></td>
                <td role="gridcell" data-cell-index="1:1" aria-selected="false" title="2031 Jul"><span class="k-link">Jul</span></td>
                <td role="gridcell" data-cell-index="1:2" aria-selected="false" title="2031 Aug"><span class="k-link">Aug</span></td>
                <td role="gridcell" data-cell-index="1:3" aria-selected="false" title="2031 Sep"><span class="k-link">Sep</span></td>
                <td role="gridcell" data-cell-index="1:4" aria-selected="false" title="2031 Oct"><span class="k-link">Oct</span></td>
              </tr>
              <tr role="row">
                <td role="gridcell" data-cell-index="2:0" aria-selected="false" title="2031 Nov"><span class="k-link">Nov</span></td>
                <td role="gridcell" data-cell-index="2:1" aria-selected="false" title="2031 Dec"><span class="k-link">Dec</span></td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <div class="k-scrollable-placeholder" style="height: 0px;"></div>
        </div>
      </div>
      <div kendo-calendar-viewlist class="k-calendar-view k-calendar-monthview">
        <div kendo-calendar-header class="k-calendar-header">
          <span class="k-button k-bare k-title">October 2019</span>
          <span class="k-today">TODAY</span>
        </div>
        <table class="k-calendar-weekdays" style="table-layout: auto;">
          <thead>
            <tr>
              <th style="width: 14%;">Su</th>
              <th style="width: 14%;">Mo</th>
              <th style="width: 14%;">Tu</th>
              <th style="width: 14%;">We</th>
              <th style="width: 14%;">Th</th>
              <th style="width: 14%;">Fr</th>
              <th style="width: 14%;">Sa</th>
            </tr>
          </thead>
        </table>
        <div kendo-virtualization tabindex="-1" class="k-content k-scrollable">
          <table style="transform: translateY(0px);">
            <tbody role="rowgroup">
              <tr role="row">
                <th scope="col" colspan="7">September 2019</th>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="0:0" aria-selected="false" title="Sunday, September 1, 2019">
                  <span class="k-link">1</span>
                </td>
                <td role="gridcell" data-cell-index="0:1" aria-selected="false" title="Monday, September 2, 2019">
                  <span class="k-link">2</span>
                </td>
                <td role="gridcell" data-cell-index="0:2" aria-selected="false" title="Tuesday, September 3, 2019">
                  <span class="k-link">3</span>
                </td>
                <td role="gridcell" data-cell-index="0:3" aria-selected="false" title="Wednesday, September 4, 2019">
                  <span class="k-link">4</span>
                </td>
                <td role="gridcell" data-cell-index="0:4" aria-selected="false" title="Thursday, September 5, 2019">
                  <span class="k-link">5</span>
                </td>
                <td role="gridcell" data-cell-index="0:5" aria-selected="false" title="Friday, September 6, 2019">
                  <span class="k-link">6</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="0:6" aria-selected="false" title="Saturday, September 7, 2019">
                  <span class="k-link">7</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="1:0" aria-selected="false" title="Sunday, September 8, 2019">
                  <span class="k-link">8</span>
                </td>
                <td role="gridcell" data-cell-index="1:1" aria-selected="false" title="Monday, September 9, 2019">
                  <span class="k-link">9</span>
                </td>
                <td role="gridcell" data-cell-index="1:2" aria-selected="false" title="Tuesday, September 10, 2019">
                  <span class="k-link">10</span>
                </td>
                <td role="gridcell" data-cell-index="1:3" aria-selected="false" title="Wednesday, September 11, 2019">
                  <span class="k-link">11</span>
                </td>
                <td role="gridcell" data-cell-index="1:4" aria-selected="false" title="Thursday, September 12, 2019">
                  <span class="k-link">12</span>
                </td>
                <td role="gridcell" data-cell-index="1:5" aria-selected="false" title="Friday, September 13, 2019">
                  <span class="k-link">13</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="1:6" aria-selected="false" title="Saturday, September 14, 2019">
                  <span class="k-link">14</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="2:0" aria-selected="false" title="Sunday, September 15, 2019">
                  <span class="k-link">15</span>
                </td>
                <td role="gridcell" data-cell-index="2:1" aria-selected="false" title="Monday, September 16, 2019">
                  <span class="k-link">16</span>
                </td>
                <td role="gridcell" data-cell-index="2:2" aria-selected="false" title="Tuesday, September 17, 2019">
                  <span class="k-link">17</span>
                </td>
                <td role="gridcell" data-cell-index="2:3" aria-selected="false" title="Wednesday, September 18, 2019">
                  <span class="k-link">18</span>
                </td>
                <td role="gridcell" data-cell-index="2:4" aria-selected="false" title="Thursday, September 19, 2019">
                  <span class="k-link">19</span>
                </td>
                <td role="gridcell" data-cell-index="2:5" aria-selected="false" title="Friday, September 20, 2019">
                  <span class="k-link">20</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="2:6" aria-selected="false" title="Saturday, September 21, 2019">
                  <span class="k-link">21</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="3:0" aria-selected="false" title="Sunday, September 22, 2019">
                  <span class="k-link">22</span>
                </td>
                <td role="gridcell" data-cell-index="3:1" aria-selected="false" title="Monday, September 23, 2019">
                  <span class="k-link">23</span>
                </td>
                <td role="gridcell" data-cell-index="3:2" aria-selected="false" title="Tuesday, September 24, 2019">
                  <span class="k-link">24</span>
                </td>
                <td role="gridcell" data-cell-index="3:3" aria-selected="false" title="Wednesday, September 25, 2019">
                  <span class="k-link">25</span>
                </td>
                <td role="gridcell" data-cell-index="3:4" aria-selected="false" title="Thursday, September 26, 2019">
                  <span class="k-link">26</span>
                </td>
                <td role="gridcell" data-cell-index="3:5" aria-selected="false" title="Friday, September 27, 2019">
                  <span class="k-link">27</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="3:6" aria-selected="false" title="Saturday, September 28, 2019">
                  <span class="k-link">28</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="4:0" aria-selected="false" title="Sunday, September 29, 2019">
                  <span class="k-link">29</span>
                </td>
                <td role="gridcell" data-cell-index="4:1" aria-selected="false" title="Monday, September 30, 2019">
                  <span class="k-link">30</span>
                </td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
              </tr>
              <tr role="row">
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
              </tr>
            </tbody>
            <tbody role="rowgroup">
              <tr role="row">
                <th scope="col" colspan="7">October 2019</th>
              </tr>
              <tr role="row">
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td role="gridcell" data-cell-index="0:2" aria-selected="false" title="Tuesday, October 1, 2019">
                  <span class="k-link">1</span>
                </td>
                <td role="gridcell" data-cell-index="0:3" aria-selected="false" title="Wednesday, October 2, 2019">
                  <span class="k-link">2</span>
                </td>
                <td role="gridcell" data-cell-index="0:4" aria-selected="false" title="Thursday, October 3, 2019">
                  <span class="k-link">3</span>
                </td>
                <td role="gridcell" data-cell-index="0:5" aria-selected="false" title="Friday, October 4, 2019">
                  <span class="k-link">4</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="0:6" aria-selected="false" title="Saturday, October 5, 2019">
                  <span class="k-link">5</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="1:0" aria-selected="false" title="Sunday, October 6, 2019">
                  <span class="k-link">6</span>
                </td>
                <td role="gridcell" data-cell-index="1:1" aria-selected="false" title="Monday, October 7, 2019">
                  <span class="k-link">7</span>
                </td>
                <td role="gridcell" data-cell-index="1:2" aria-selected="false" title="Tuesday, October 8, 2019">
                  <span class="k-link">8</span>
                </td>
                <td role="gridcell" data-cell-index="1:3" aria-selected="false" title="Wednesday, October 9, 2019">
                  <span class="k-link">9</span>
                </td>
                <td role="gridcell" data-cell-index="1:4" aria-selected="false" title="Thursday, October 10, 2019">
                  <span class="k-link">10</span>
                </td>
                <td role="gridcell" data-cell-index="1:5" aria-selected="false" title="Friday, October 11, 2019">
                  <span class="k-link">11</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="1:6" aria-selected="false" title="Saturday, October 12, 2019">
                  <span class="k-link">12</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="2:0" aria-selected="false" title="Sunday, October 13, 2019">
                  <span class="k-link">13</span>
                </td>
                <td role="gridcell" data-cell-index="2:1" aria-selected="false" title="Monday, October 14, 2019">
                  <span class="k-link">14</span>
                </td>
                <td role="gridcell" data-cell-index="2:2" aria-selected="false" title="Tuesday, October 15, 2019">
                  <span class="k-link">15</span>
                </td>
                <td role="gridcell" data-cell-index="2:3" aria-selected="false" title="Wednesday, October 16, 2019">
                  <span class="k-link">16</span>
                </td>
                <td role="gridcell" data-cell-index="2:4" aria-selected="true" title="Thursday, October 17, 2019" class="k-state-selected">
                  <span class="k-link">17</span>
                </td>
                <td role="gridcell" data-cell-index="2:5" aria-selected="false" title="Friday, October 18, 2019">
                  <span class="k-link">18</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="2:6" aria-selected="false" title="Saturday, October 19, 2019">
                  <span class="k-link">19</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="3:0" aria-selected="false" title="Sunday, October 20, 2019">
                  <span class="k-link">20</span>
                </td>
                <td role="gridcell" data-cell-index="3:1" aria-selected="false" title="Monday, October 21, 2019">
                  <span class="k-link">21</span>
                </td>
                <td role="gridcell" data-cell-index="3:2" aria-selected="false" title="Tuesday, October 22, 2019">
                  <span class="k-link">22</span>
                </td>
                <td role="gridcell" data-cell-index="3:3" aria-selected="false" title="Wednesday, October 23, 2019">
                  <span class="k-link">23</span>
                </td>
                <td role="gridcell" data-cell-index="3:4" aria-selected="false" title="Thursday, October 24, 2019">
                  <span class="k-link">24</span>
                </td>
                <td role="gridcell" data-cell-index="3:5" aria-selected="false" title="Friday, October 25, 2019">
                  <span class="k-link">25</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="3:6" aria-selected="false" title="Saturday, October 26, 2019">
                  <span class="k-link">26</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="4:0" aria-selected="false" title="Sunday, October 27, 2019">
                  <span class="k-link">27</span>
                </td>
                <td role="gridcell" data-cell-index="4:1" aria-selected="false" title="Monday, October 28, 2019">
                  <span class="k-link">28</span>
                </td>
                <td role="gridcell" data-cell-index="4:2" aria-selected="false" title="Tuesday, October 29, 2019">
                  <span class="k-link">29</span>
                </td>
                <td role="gridcell" data-cell-index="4:3" aria-selected="false" title="Wednesday, October 30, 2019">
                  <span class="k-link">30</span>
                </td>
                <td role="gridcell" data-cell-index="4:4" aria-selected="false" title="Thursday, October 31, 2019">
                  <span class="k-link">31</span>
                </td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
              </tr>
              <tr role="row">
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
              </tr>
            </tbody>
            <tbody role="rowgroup">
              <tr role="row">
                <th scope="col" colspan="7">November 2019</th>
              </tr>
              <tr role="row">
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td role="gridcell" data-cell-index="0:5" aria-selected="false" title="Friday, November 1, 2019">
                  <span class="k-link">1</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="0:6" aria-selected="false" title="Saturday, November 2, 2019">
                  <span class="k-link">2</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="1:0" aria-selected="false" title="Sunday, November 3, 2019">
                  <span class="k-link">3</span>
                </td>
                <td role="gridcell" data-cell-index="1:1" aria-selected="false" title="Monday, November 4, 2019">
                  <span class="k-link">4</span>
                </td>
                <td role="gridcell" data-cell-index="1:2" aria-selected="false" title="Tuesday, November 5, 2019">
                  <span class="k-link">5</span>
                </td>
                <td role="gridcell" data-cell-index="1:3" aria-selected="false" title="Wednesday, November 6, 2019">
                  <span class="k-link">6</span>
                </td>
                <td role="gridcell" data-cell-index="1:4" aria-selected="false" title="Thursday, November 7, 2019">
                  <span class="k-link">7</span>
                </td>
                <td role="gridcell" data-cell-index="1:5" aria-selected="false" title="Friday, November 8, 2019">
                  <span class="k-link">8</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="1:6" aria-selected="false" title="Saturday, November 9, 2019">
                  <span class="k-link">9</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="2:0" aria-selected="false" title="Sunday, November 10, 2019">
                  <span class="k-link">10</span>
                </td>
                <td role="gridcell" data-cell-index="2:1" aria-selected="false" title="Monday, November 11, 2019">
                  <span class="k-link">11</span>
                </td>
                <td role="gridcell" data-cell-index="2:2" aria-selected="false" title="Tuesday, November 12, 2019">
                  <span class="k-link">12</span>
                </td>
                <td role="gridcell" data-cell-index="2:3" aria-selected="false" title="Wednesday, November 13, 2019">
                  <span class="k-link">13</span>
                </td>
                <td role="gridcell" data-cell-index="2:4" aria-selected="false" title="Thursday, November 14, 2019">
                  <span class="k-link">14</span>
                </td>
                <td role="gridcell" data-cell-index="2:5" aria-selected="false" title="Friday, November 15, 2019">
                  <span class="k-link">15</span>
                </td>
                <td role="gridcell" class="k-today k-weekend" data-cell-index="2:6" aria-selected="false" title="Saturday, November 16, 2019">
                  <span class="k-link">16</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="3:0" aria-selected="false" title="Sunday, November 17, 2019">
                  <span class="k-link">17</span>
                </td>
                <td role="gridcell" data-cell-index="3:1" aria-selected="false" title="Monday, November 18, 2019">
                  <span class="k-link">18</span>
                </td>
                <td role="gridcell" data-cell-index="3:2" aria-selected="false" title="Tuesday, November 19, 2019">
                  <span class="k-link">19</span>
                </td>
                <td role="gridcell" data-cell-index="3:3" aria-selected="false" title="Wednesday, November 20, 2019">
                  <span class="k-link">20</span>
                </td>
                <td role="gridcell" data-cell-index="3:4" aria-selected="false" title="Thursday, November 21, 2019">
                  <span class="k-link">21</span>
                </td>
                <td role="gridcell" data-cell-index="3:5" aria-selected="false" title="Friday, November 22, 2019">
                  <span class="k-link">22</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="3:6" aria-selected="false" title="Saturday, November 23, 2019">
                  <span class="k-link">23</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="4:0" aria-selected="false" title="Sunday, November 24, 2019">
                  <span class="k-link">24</span>
                </td>
                <td role="gridcell" data-cell-index="4:1" aria-selected="false" title="Monday, November 25, 2019">
                  <span class="k-link">25</span>
                </td>
                <td role="gridcell" data-cell-index="4:2" aria-selected="false" title="Tuesday, November 26, 2019">
                  <span class="k-link">26</span>
                </td>
                <td role="gridcell" data-cell-index="4:3" aria-selected="false" title="Wednesday, November 27, 2019">
                  <span class="k-link">27</span>
                </td>
                <td role="gridcell" data-cell-index="4:4" aria-selected="false" title="Thursday, November 28, 2019">
                  <span class="k-link">28</span>
                </td>
                <td role="gridcell" data-cell-index="4:5" aria-selected="false" title="Friday, November 29, 2019">
                  <span class="k-link">29</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="4:6" aria-selected="false" title="Saturday, November 30, 2019">
                  <span class="k-link">30</span>
                </td>
              </tr>
              <tr role="row">
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
              </tr>
            </tbody>
            <tbody role="rowgroup">
              <tr role="row">
                <th scope="col" colspan="7">December 2019</th>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="0:0" aria-selected="false" title="Sunday, December 1, 2019">
                  <span class="k-link">1</span>
                </td>
                <td role="gridcell" data-cell-index="0:1" aria-selected="false" title="Monday, December 2, 2019">
                  <span class="k-link">2</span>
                </td>
                <td role="gridcell" data-cell-index="0:2" aria-selected="false" title="Tuesday, December 3, 2019">
                  <span class="k-link">3</span>
                </td>
                <td role="gridcell" data-cell-index="0:3" aria-selected="false" title="Wednesday, December 4, 2019">
                  <span class="k-link">4</span>
                </td>
                <td role="gridcell" data-cell-index="0:4" aria-selected="false" title="Thursday, December 5, 2019">
                  <span class="k-link">5</span>
                </td>
                <td role="gridcell" data-cell-index="0:5" aria-selected="false" title="Friday, December 6, 2019">
                  <span class="k-link">6</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="0:6" aria-selected="false" title="Saturday, December 7, 2019">
                  <span class="k-link">7</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="1:0" aria-selected="false" title="Sunday, December 8, 2019">
                  <span class="k-link">8</span>
                </td>
                <td role="gridcell" data-cell-index="1:1" aria-selected="false" title="Monday, December 9, 2019">
                  <span class="k-link">9</span>
                </td>
                <td role="gridcell" data-cell-index="1:2" aria-selected="false" title="Tuesday, December 10, 2019">
                  <span class="k-link">10</span>
                </td>
                <td role="gridcell" data-cell-index="1:3" aria-selected="false" title="Wednesday, December 11, 2019">
                  <span class="k-link">11</span>
                </td>
                <td role="gridcell" data-cell-index="1:4" aria-selected="false" title="Thursday, December 12, 2019">
                  <span class="k-link">12</span>
                </td>
                <td role="gridcell" data-cell-index="1:5" aria-selected="false" title="Friday, December 13, 2019">
                  <span class="k-link">13</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="1:6" aria-selected="false" title="Saturday, December 14, 2019">
                  <span class="k-link">14</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="2:0" aria-selected="false" title="Sunday, December 15, 2019">
                  <span class="k-link">15</span>
                </td>
                <td role="gridcell" data-cell-index="2:1" aria-selected="false" title="Monday, December 16, 2019">
                  <span class="k-link">16</span>
                </td>
                <td role="gridcell" data-cell-index="2:2" aria-selected="false" title="Tuesday, December 17, 2019">
                  <span class="k-link">17</span>
                </td>
                <td role="gridcell" data-cell-index="2:3" aria-selected="false" title="Wednesday, December 18, 2019">
                  <span class="k-link">18</span>
                </td>
                <td role="gridcell" data-cell-index="2:4" aria-selected="false" title="Thursday, December 19, 2019">
                  <span class="k-link">19</span>
                </td>
                <td role="gridcell" data-cell-index="2:5" aria-selected="false" title="Friday, December 20, 2019">
                  <span class="k-link">20</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="2:6" aria-selected="false" title="Saturday, December 21, 2019">
                  <span class="k-link">21</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="3:0" aria-selected="false" title="Sunday, December 22, 2019">
                  <span class="k-link">22</span>
                </td>
                <td role="gridcell" data-cell-index="3:1" aria-selected="false" title="Monday, December 23, 2019">
                  <span class="k-link">23</span>
                </td>
                <td role="gridcell" data-cell-index="3:2" aria-selected="false" title="Tuesday, December 24, 2019">
                  <span class="k-link">24</span>
                </td>
                <td role="gridcell" data-cell-index="3:3" aria-selected="false" title="Wednesday, December 25, 2019">
                  <span class="k-link">25</span>
                </td>
                <td role="gridcell" data-cell-index="3:4" aria-selected="false" title="Thursday, December 26, 2019">
                  <span class="k-link">26</span>
                </td>
                <td role="gridcell" data-cell-index="3:5" aria-selected="false" title="Friday, December 27, 2019">
                  <span class="k-link">27</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="3:6" aria-selected="false" title="Saturday, December 28, 2019">
                  <span class="k-link">28</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="4:0" aria-selected="false" title="Sunday, December 29, 2019">
                  <span class="k-link">29</span>
                </td>
                <td role="gridcell" data-cell-index="4:1" aria-selected="false" title="Monday, December 30, 2019">
                  <span class="k-link">30</span>
                </td>
                <td role="gridcell" data-cell-index="4:2" aria-selected="false" title="Tuesday, December 31, 2019">
                  <span class="k-link">31</span>
                </td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
              </tr>
              <tr role="row">
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
              </tr>
            </tbody>
            <tbody role="rowgroup">
              <tr role="row">
                <th scope="col" colspan="7">January 2020</th>
              </tr>
              <tr role="row">
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td role="gridcell" data-cell-index="0:3" aria-selected="false" title="Wednesday, January 1, 2020">
                  <span class="k-link">1</span>
                </td>
                <td role="gridcell" data-cell-index="0:4" aria-selected="false" title="Thursday, January 2, 2020">
                  <span class="k-link">2</span>
                </td>
                <td role="gridcell" data-cell-index="0:5" aria-selected="false" title="Friday, January 3, 2020">
                  <span class="k-link">3</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="0:6" aria-selected="false" title="Saturday, January 4, 2020">
                  <span class="k-link">4</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="1:0" aria-selected="false" title="Sunday, January 5, 2020">
                  <span class="k-link">5</span>
                </td>
                <td role="gridcell" data-cell-index="1:1" aria-selected="false" title="Monday, January 6, 2020">
                  <span class="k-link">6</span>
                </td>
                <td role="gridcell" data-cell-index="1:2" aria-selected="false" title="Tuesday, January 7, 2020">
                  <span class="k-link">7</span>
                </td>
                <td role="gridcell" data-cell-index="1:3" aria-selected="false" title="Wednesday, January 8, 2020">
                  <span class="k-link">8</span>
                </td>
                <td role="gridcell" data-cell-index="1:4" aria-selected="false" title="Thursday, January 9, 2020">
                  <span class="k-link">9</span>
                </td>
                <td role="gridcell" data-cell-index="1:5" aria-selected="false" title="Friday, January 10, 2020">
                  <span class="k-link">10</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="1:6" aria-selected="false" title="Saturday, January 11, 2020">
                  <span class="k-link">11</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="2:0" aria-selected="false" title="Sunday, January 12, 2020">
                  <span class="k-link">12</span>
                </td>
                <td role="gridcell" data-cell-index="2:1" aria-selected="false" title="Monday, January 13, 2020">
                  <span class="k-link">13</span>
                </td>
                <td role="gridcell" data-cell-index="2:2" aria-selected="false" title="Tuesday, January 14, 2020">
                  <span class="k-link">14</span>
                </td>
                <td role="gridcell" data-cell-index="2:3" aria-selected="false" title="Wednesday, January 15, 2020">
                  <span class="k-link">15</span>
                </td>
                <td role="gridcell" data-cell-index="2:4" aria-selected="false" title="Thursday, January 16, 2020">
                  <span class="k-link">16</span>
                </td>
                <td role="gridcell" data-cell-index="2:5" aria-selected="false" title="Friday, January 17, 2020">
                  <span class="k-link">17</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="2:6" aria-selected="false" title="Saturday, January 18, 2020">
                  <span class="k-link">18</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="3:0" aria-selected="false" title="Sunday, January 19, 2020">
                  <span class="k-link">19</span>
                </td>
                <td role="gridcell" data-cell-index="3:1" aria-selected="false" title="Monday, January 20, 2020">
                  <span class="k-link">20</span>
                </td>
                <td role="gridcell" data-cell-index="3:2" aria-selected="false" title="Tuesday, January 21, 2020">
                  <span class="k-link">21</span>
                </td>
                <td role="gridcell" data-cell-index="3:3" aria-selected="false" title="Wednesday, January 22, 2020">
                  <span class="k-link">22</span>
                </td>
                <td role="gridcell" data-cell-index="3:4" aria-selected="false" title="Thursday, January 23, 2020">
                  <span class="k-link">23</span>
                </td>
                <td role="gridcell" data-cell-index="3:5" aria-selected="false" title="Friday, January 24, 2020">
                  <span class="k-link">24</span>
                </td>
                <td role="gridcell" class="k-weekend" data-cell-index="3:6" aria-selected="false" title="Saturday, January 25, 2020">
                  <span class="k-link">25</span>
                </td>
              </tr>
              <tr role="row">
                <td role="gridcell" class="k-weekend" data-cell-index="4:0" aria-selected="false" title="Sunday, January 26, 2020">
                  <span class="k-link">26</span>
                </td>
                <td role="gridcell" data-cell-index="4:1" aria-selected="false" title="Monday, January 27, 2020">
                  <span class="k-link">27</span>
                </td>
                <td role="gridcell" data-cell-index="4:2" aria-selected="false" title="Tuesday, January 28, 2020">
                  <span class="k-link">28</span>
                </td>
                <td role="gridcell" data-cell-index="4:3" aria-selected="false" title="Wednesday, January 29, 2020">
                  <span class="k-link">29</span>
                </td>
                <td role="gridcell" data-cell-index="4:4" aria-selected="false" title="Thursday, January 30, 2020">
                  <span class="k-link">30</span>
                </td>
                <td role="gridcell" data-cell-index="4:5" aria-selected="false" title="Friday, January 31, 2020">
                  <span class="k-link">31</span>
                </td>
                <td class="k-empty">&nbsp;</td>
              </tr>
              <tr role="row">
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
                <td class="k-empty">&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <div class="k-scrollable-placeholder" style="height: 0px;"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      value: { type: String },
      valueFormat: { type: String, default: null }, // @DOC: Moment-style строка с описанием формата хранения данных
    },
  };
</script>

<style>
  @import './datetime.scss';
</style>

<style scoped>
  .w-date-calendar .k-calendar {
    display: flex;
    width: min-content;
  }
</style>
