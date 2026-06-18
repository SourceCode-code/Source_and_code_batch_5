{/* <table width="100%" class="ih-td-tab">
    <tbody>
        <tr class="ih-pt-tbl" style="display:revert;">
            <!-- ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <th ng-if="pointsTableData[0].OrderNo != undefined &amp;&amp; pointsTableData[0].OrderNo != ''"
                class="ng-scope">POS</th>
            <!-- end ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <!-- ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <th ng-if="pointsTableData[0].Status != undefined &amp;&amp; pointsTableData[0].Status != ''"
                class="ng-scope"></th>
            <!-- end ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <th class="text-white" style="text-align: left;">TEAM</th>
            <th class="text-white">P</th>
            <th class="text-white">W</th>
            <th class="text-white">L</th> <!--
        <th class="text-white">T</th>-->
            <th class="text-white">NR</th>
            <th class="text-white">NRR</th>
            <th class="text-white">FOR</th>
            <th class="text-white">AGAINST</th>
            <th class="text-white">PTS</th>
            <!-- ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
            <th class="text-white mob-hide ng-scope"
                ng-if="pointsTableData[0].Performance != undefined &amp;&amp; pointsTableData[0].Performance != ''">
                RECENT FORM</th>
            <!-- end ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
        </tr>
    </tbody>
    <tbody id="pointsdata"> <!-- ngRepeat: list in pointsTableData -->
        <tr class="team0 ng-scope" ng-repeat="list in pointsTableData"> <!-- ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' --
><td class="table-qualified ng-binding ng-scope" ng-if="pointsTableData[0].OrderNo != undefined &amp;&amp; pointsTableData[0].OrderNo != ''"> 1 </td>
        <!-- end ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <!-- ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td ng-if="pointsTableData[0].Status != undefined &amp;&amp; pointsTableData[0].Status != ''"
                class="ng-scope"> <span class="posStatus  pts-nc"
                    ng-class="{'pts-up':list.Status == 'UP','pts-down':list.Status == 'DOWN','pts-nc':list.Status == 'SAME'}"></span>
            </td>
            <!-- end ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td class="ih-t-color">
                <div class="ih-pt-ic ">
                    <div class="ih-pt-img"> <img
                            ng-src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/RCB.png?v=2"
                            alt=""
                            src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/RCB.png?v=2">
                    </div>
                    <!-- <h2 class="ih-pt-cont mb-0 mob-hide">{{ titleCaseText(list.TeamName)}}</h2> -->
                    <h2 class="ih-pt-cont mb-0 ng-binding">RCB</h2>
                    <!-- ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' --><span
                        class="standings_qualified ng-scope"
                        ng-if="list.IsQualified != undefined &amp;&amp; list.IsQualified != null &amp;&amp; list.IsQualified !='' &amp;&amp; list.IsQualified !='0'"></span><!-- end ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' -->
                </div>
            </td>
            <td class="ng-binding">14</td>
            <td class="ng-binding">9</td>
            <td class="ng-binding">5</td> <!--<td>{{ list.Tied }}</td>-->
            <td class="ng-binding">0</td>
            <td class="ng-binding">0.783</td>
            <td class="ng-binding">2642/254.2</td>
            <td class="ng-binding">2619/272.4</td>
            <td class="bt ng-binding">18</td>
            <!-- ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
            <td class="ih-pt-fb-w mob-hide ng-scope"
                ng-if="pointsTableData[0].Performance != undefined &amp;&amp; pointsTableData[0].Performance != ''">
                <div class="ih-pt-fb ng-binding" style="justify-content: center"
                    ng-bind-html="bindRecentPerformance(list.Performance) | to_trusted"><span
                        class="rf L ih-pt-r">L</span>
                    <span class="rf W ih-pt-g">W</span><span class="rf W ih-pt-g">W</span><span
                        class="rf W ih-pt-g">W</span><span class="rf L ih-pt-r">L</span>
                </div>
            </td><!-- end ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
        </tr><!-- end ngRepeat: list in pointsTableData -->
        <tr class="team0 ng-scope" ng-repeat="list in pointsTableData">
            <!-- ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <td class="table-qualified ng-binding ng-scope"
                ng-if="pointsTableData[0].OrderNo != undefined &amp;&amp; pointsTableData[0].OrderNo != ''"> 2 </td>
            <!-- end ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <!-- ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td ng-if="pointsTableData[0].Status != undefined &amp;&amp; pointsTableData[0].Status != ''"
                class="ng-scope"> <span class="posStatus  pts-nc"
                    ng-class="{'pts-up':list.Status == 'UP','pts-down':list.Status == 'DOWN','pts-nc':list.Status == 'SAME'}"></span>
            </td><!-- end ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td class="ih-t-color">
                <div class="ih-pt-ic ">
                    <div class="ih-pt-img"> <img
                            ng-src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/GT.png?v=2"
                            alt=""
                            src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/GT.png?v=2">
                    </div> <!-- <h2 class="ih-pt-cont mb-0 mob-hide">{{ titleCaseText(list.TeamName)}}</h2> -->
                    <h2 class="ih-pt-cont mb-0 ng-binding">GT</h2>
                    <!-- ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' --><span
                        class="standings_qualified ng-scope"
                        ng-if="list.IsQualified != undefined &amp;&amp; list.IsQualified != null &amp;&amp; list.IsQualified !='' &amp;&amp; list.IsQualified !='0'"></span><!-- end ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' -->
                </div>
            </td>
            <td class="ng-binding">14</td>
            <td class="ng-binding">9</td>
            <td class="ng-binding">5</td> <!--<td>{{ list.Tied }}</td>-->
            <td class="ng-binding">0</td>
            <td class="ng-binding">0.695</td>
            <td class="ng-binding">2558/270.4</td>
            <td class="ng-binding">2434/278.0</td>
            <td class="bt ng-binding">18</td>
            <!-- ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
            <td class="ih-pt-fb-w mob-hide ng-scope"
                ng-if="pointsTableData[0].Performance != undefined &amp;&amp; pointsTableData[0].Performance != ''">
                <div class="ih-pt-fb ng-binding" style="justify-content: center"
                    ng-bind-html="bindRecentPerformance(list.Performance) | to_trusted"><span
                        class="rf W ih-pt-g">W</span><span class="rf L ih-pt-r">L</span><span
                        class="rf W ih-pt-g">W</span><span class="rf W ih-pt-g">W</span><span
                        class="rf W ih-pt-g">W</span></div>
            </td><!-- end ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
        </tr><!-- end ngRepeat: list in pointsTableData -->
        <tr class="team0 ng-scope" ng-repeat="list in pointsTableData">
            <!-- ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <td class="table-qualified ng-binding ng-scope"
                ng-if="pointsTableData[0].OrderNo != undefined &amp;&amp; pointsTableData[0].OrderNo != ''"> 3 </td>
            <!-- end ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <!-- ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td ng-if="pointsTableData[0].Status != undefined &amp;&amp; pointsTableData[0].Status != ''"
                class="ng-scope"> <span class="posStatus  pts-nc"
                    ng-class="{'pts-up':list.Status == 'UP','pts-down':list.Status == 'DOWN','pts-nc':list.Status == 'SAME'}"></span>
            </td>
            <!-- end ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td class="ih-t-color">
                <div class="ih-pt-ic ">
                    <div class="ih-pt-img"> <img
                            ng-src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/SRH.png?v=2"
                            alt=""
                            src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/SRH.png?v=2">
                    </div> <!-- <h2 class="ih-pt-cont mb-0 mob-hide">{{ titleCaseText(list.TeamName)}}</h2> -->
                    <h2 class="ih-pt-cont mb-0 ng-binding">SRH</h2>
                    <!-- ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' --><span
                        class="standings_qualified ng-scope"
                        ng-if="list.IsQualified != undefined &amp;&amp; list.IsQualified != null &amp;&amp; list.IsQualified !='' &amp;&amp; list.IsQualified !='0'"></span><!-- end ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' -->
                </div>
            </td>
            <td class="ng-binding">14</td>
            <td class="ng-binding">9</td>
            <td class="ng-binding">5</td>
            <!--<td>{{ list.Tied }}</td>-->
            <td class="ng-binding">0</td>
            <td class="ng-binding">0.524</td>
            <td class="ng-binding">2854/276.1</td>
            <td class="ng-binding">2675/272.4</td>
            <td class="bt ng-binding">18</td>
            <!-- ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
            <td class="ih-pt-fb-w mob-hide ng-scope"
                ng-if="pointsTableData[0].Performance != undefined &amp;&amp; pointsTableData[0].Performance != ''">
                <div class="ih-pt-fb ng-binding" style="justify-content: center"
                    ng-bind-html="bindRecentPerformance(list.Performance) | to_trusted"><span
                        class="rf W ih-pt-g">W</span><span class="rf W ih-pt-g">W</span><span
                        class="rf L ih-pt-r">L</span><span class="rf W ih-pt-g">W</span><span
                        class="rf L ih-pt-r">L</span></div>
            </td><!-- end ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
        </tr><!-- end ngRepeat: list in pointsTableData -->
        <tr class="team0 ng-scope" ng-repeat="list in pointsTableData">
            <!-- ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <td class="table-qualified ng-binding ng-scope"
                ng-if="pointsTableData[0].OrderNo != undefined &amp;&amp; pointsTableData[0].OrderNo != ''"> 4 </td>
            <!-- end ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <!-- ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td ng-if="pointsTableData[0].Status != undefined &amp;&amp; pointsTableData[0].Status != ''"
                class="ng-scope"> <span class="posStatus  pts-nc"
                    ng-class="{'pts-up':list.Status == 'UP','pts-down':list.Status == 'DOWN','pts-nc':list.Status == 'SAME'}"></span>
            </td>
            <!-- end ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td class="ih-t-color">
                <div class="ih-pt-ic ">
                    <div class="ih-pt-img"> <img
                            ng-src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/RR.png?v=2"
                            alt=""
                            src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/RR.png?v=2">
                    </div> <!-- <h2 class="ih-pt-cont mb-0 mob-hide">{{ titleCaseText(list.TeamName)}}</h2> -->
                    <h2 class="ih-pt-cont mb-0 ng-binding">RR</h2>
                    <!-- ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' --><span
                        class="standings_qualified ng-scope"
                        ng-if="list.IsQualified != undefined &amp;&amp; list.IsQualified != null &amp;&amp; list.IsQualified !='' &amp;&amp; list.IsQualified !='0'"></span><!-- end ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' -->
                </div>
            </td>
            <td class="ng-binding">14</td>
            <td class="ng-binding">8</td>
            <td class="ng-binding">6</td> <!--<td>{{ list.Tied }}</td>-->
            <td class="ng-binding">0</td>
            <td class="ng-binding">0.189</td>
            <td class="ng-binding">2619/259.4</td>
            <td class="ng-binding">2649/267.4</td>
            <td class="bt ng-binding">16</td>
            <!-- ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
            <td class="ih-pt-fb-w mob-hide ng-scope"
                ng-if="pointsTableData[0].Performance != undefined &amp;&amp; pointsTableData[0].Performance != ''">
                <div class="ih-pt-fb ng-binding" style="justify-content: center"
                    ng-bind-html="bindRecentPerformance(list.Performance) | to_trusted"><span
                        class="rf W ih-pt-g">W</span><span class="rf W ih-pt-g">W</span><span
                        class="rf L ih-pt-r">L</span><span class="rf L ih-pt-r">L</span><span
                        class="rf L ih-pt-r">L</span></div>
            </td><!-- end ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
        </tr><!-- end ngRepeat: list in pointsTableData -->
        <tr class="team0 ng-scope" ng-repeat="list in pointsTableData">
            <!-- ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <td class="table-qualified ng-binding ng-scope"
                ng-if="pointsTableData[0].OrderNo != undefined &amp;&amp; pointsTableData[0].OrderNo != ''"> 5 </td>
            <!-- end ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <!-- ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td ng-if="pointsTableData[0].Status != undefined &amp;&amp; pointsTableData[0].Status != ''"
                class="ng-scope"> <span class="posStatus  pts-nc"
                    ng-class="{'pts-up':list.Status == 'UP','pts-down':list.Status == 'DOWN','pts-nc':list.Status == 'SAME'}"></span>
            </td><!-- end ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td class="ih-t-color">
                <div class="ih-pt-ic ">
                    <div class="ih-pt-img"> <img
                            ng-src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/PBKS.png?v=2"
                            alt=""
                            src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/PBKS.png?v=2">
                    </div> <!-- <h2 class="ih-pt-cont mb-0 mob-hide">{{ titleCaseText(list.TeamName)}}</h2> -->
                    <h2 class="ih-pt-cont mb-0 ng-binding">PBKS</h2>
                    <!-- ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' -->
                </div>
            </td>
            <td class="ng-binding">14</td>
            <td class="ng-binding">7</td>
            <td class="ng-binding">6</td> <!--<td>{{ list.Tied }}</td>-->
            <td class="ng-binding">1</td>
            <td class="ng-binding">0.309</td>
            <td class="ng-binding">2711/250.0</td>
            <td class="ng-binding">2718/258.0</td>
            <td class="bt ng-binding">15</td>
            <!-- ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
            <td class="ih-pt-fb-w mob-hide ng-scope"
                ng-if="pointsTableData[0].Performance != undefined &amp;&amp; pointsTableData[0].Performance != ''">
                <div class="ih-pt-fb ng-binding" style="justify-content: center"
                    ng-bind-html="bindRecentPerformance(list.Performance) | to_trusted"><span
                        class="rf W ih-pt-g">W</span><span class="rf L ih-pt-r">L</span><span
                        class="rf L ih-pt-r">L</span><span class="rf L ih-pt-r">L</span><span
                        class="rf L ih-pt-r">L</span></div>
            </td><!-- end ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
        </tr><!-- end ngRepeat: list in pointsTableData -->
        <tr class="team0 ng-scope" ng-repeat="list in pointsTableData">
            <!-- ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <td class="table-qualified ng-binding ng-scope"
                ng-if="pointsTableData[0].OrderNo != undefined &amp;&amp; pointsTableData[0].OrderNo != ''"> 6 </td>
            <!-- end ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <!-- ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td ng-if="pointsTableData[0].Status != undefined &amp;&amp; pointsTableData[0].Status != ''"
                class="ng-scope"> <span class="posStatus  pts-up"
                    ng-class="{'pts-up':list.Status == 'UP','pts-down':list.Status == 'DOWN','pts-nc':list.Status == 'SAME'}"></span>
            </td><!-- end ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td class="ih-t-color">
                <div class="ih-pt-ic ">
                    <div class="ih-pt-img"> <img
                            ng-src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/DC.png?v=2"
                            alt=""
                            src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/DC.png?v=2">
                    </div> <!-- <h2 class="ih-pt-cont mb-0 mob-hide">{{ titleCaseText(list.TeamName)}}</h2> -->
                    <h2 class="ih-pt-cont mb-0 ng-binding">DC</h2>
                    <!-- ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' -->
                </div>
            </td>
            <td class="ng-binding">14</td>
            <td class="ng-binding">7</td>
            <td class="ng-binding">7</td> <!--<td>{{ list.Tied }}</td>-->
            <td class="ng-binding">0</td>
            <td class="ng-binding">-0.651</td>
            <td class="ng-binding">2559/272.4</td>
            <td class="ng-binding">2581/257.1</td>
            <td class="bt ng-binding">14</td>
            <!-- ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
            <td class="ih-pt-fb-w mob-hide ng-scope"
                ng-if="pointsTableData[0].Performance != undefined &amp;&amp; pointsTableData[0].Performance != ''">
                <div class="ih-pt-fb ng-binding" style="justify-content: center"
                    ng-bind-html="bindRecentPerformance(list.Performance) | to_trusted"><span
                        class="rf W ih-pt-g">W</span><span class="rf W ih-pt-g">W</span><span
                        class="rf W ih-pt-g">W</span><span class="rf L ih-pt-r">L</span><span
                        class="rf L ih-pt-r">L</span></div>
            </td><!-- end ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
        </tr><!-- end ngRepeat: list in pointsTableData -->
        <tr class="team0 ng-scope" ng-repeat="list in pointsTableData">
            <!-- ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <td class="table-qualified ng-binding ng-scope"
                ng-if="pointsTableData[0].OrderNo != undefined &amp;&amp; pointsTableData[0].OrderNo != ''"> 7 </td>
            <!-- end ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <!-- ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td ng-if="pointsTableData[0].Status != undefined &amp;&amp; pointsTableData[0].Status != ''"
                class="ng-scope"> <span class="posStatus  pts-down"
                    ng-class="{'pts-up':list.Status == 'UP','pts-down':list.Status == 'DOWN','pts-nc':list.Status == 'SAME'}"></span>
            </td><!-- end ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td class="ih-t-color">
                <div class="ih-pt-ic ">
                    <div class="ih-pt-img"> <img
                            ng-src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/KKR.png?v=2"
                            alt=""
                            src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/KKR.png?v=2">
                    </div> <!-- <h2 class="ih-pt-cont mb-0 mob-hide">{{ titleCaseText(list.TeamName)}}</h2> -->
                    <h2 class="ih-pt-cont mb-0 ng-binding">KKR</h2>
                    <!-- ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' -->
                </div>
            </td>
            <td class="ng-binding">14</td>
            <td class="ng-binding">6</td>
            <td class="ng-binding">7</td> <!--<td>{{ list.Tied }}</td>-->
            <td class="ng-binding">1</td>
            <td class="ng-binding">-0.147</td>
            <td class="ng-binding">2284/251.1</td>
            <td class="ng-binding">2384/258.0</td>
            <td class="bt ng-binding">13</td>
            <!-- ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
            <td class="ih-pt-fb-w mob-hide ng-scope"
                ng-if="pointsTableData[0].Performance != undefined &amp;&amp; pointsTableData[0].Performance != ''">
                <div class="ih-pt-fb ng-binding" style="justify-content: center"
                    ng-bind-html="bindRecentPerformance(list.Performance) | to_trusted"><span
                        class="rf L ih-pt-r">L</span><span class="rf W ih-pt-g">W</span><span
                        class="rf W ih-pt-g">W</span><span class="rf L ih-pt-r">L</span><span
                        class="rf W ih-pt-g">W</span></div>
            </td><!-- end ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
        </tr><!-- end ngRepeat: list in pointsTableData -->
        <tr class="team0 ng-scope" ng-repeat="list in pointsTableData">
            <!-- ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <td class="table-qualified ng-binding ng-scope"
                ng-if="pointsTableData[0].OrderNo != undefined &amp;&amp; pointsTableData[0].OrderNo != ''"> 8 </td>
            <!-- end ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <!-- ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td ng-if="pointsTableData[0].Status != undefined &amp;&amp; pointsTableData[0].Status != ''"
                class="ng-scope"> <span class="posStatus  pts-down"
                    ng-class="{'pts-up':list.Status == 'UP','pts-down':list.Status == 'DOWN','pts-nc':list.Status == 'SAME'}"></span>
            </td><!-- end ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td class="ih-t-color">
                <div class="ih-pt-ic ">
                    <div class="ih-pt-img"> <img
                            ng-src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/CSK.png?v=2"
                            alt=""
                            src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/CSK.png?v=2">
                    </div> <!-- <h2 class="ih-pt-cont mb-0 mob-hide">{{ titleCaseText(list.TeamName)}}</h2> -->
                    <h2 class="ih-pt-cont mb-0 ng-binding">CSK</h2>
                    <!-- ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' -->
                </div>
            </td>
            <td class="ng-binding">14</td>
            <td class="ng-binding">6</td>
            <td class="ng-binding">8</td> <!--<td>{{ list.Tied }}</td>-->
            <td class="ng-binding">0</td>
            <td class="ng-binding">-0.345</td>
            <td class="ng-binding">2530/275.0</td>
            <td class="ng-binding">2512/263.1</td>
            <td class="bt ng-binding">12</td>
            <!-- ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
            <td class="ih-pt-fb-w mob-hide ng-scope"
                ng-if="pointsTableData[0].Performance != undefined &amp;&amp; pointsTableData[0].Performance != ''">
                <div class="ih-pt-fb ng-binding" style="justify-content: center"
                    ng-bind-html="bindRecentPerformance(list.Performance) | to_trusted"><span
                        class="rf L ih-pt-r">L</span><span class="rf L ih-pt-r">L</span><span
                        class="rf L ih-pt-r">L</span><span class="rf W ih-pt-g">W</span><span
                        class="rf W ih-pt-g">W</span></div>
            </td><!-- end ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
        </tr><!-- end ngRepeat: list in pointsTableData -->
        <tr class="team0 ng-scope" ng-repeat="list in pointsTableData">
            <!-- ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <td class="table-qualified ng-binding ng-scope"
                ng-if="pointsTableData[0].OrderNo != undefined &amp;&amp; pointsTableData[0].OrderNo != ''"> 9 </td>
            <!-- end ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <!-- ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td ng-if="pointsTableData[0].Status != undefined &amp;&amp; pointsTableData[0].Status != ''"
                class="ng-scope"> <span class="posStatus  pts-nc"
                    ng-class="{'pts-up':list.Status == 'UP','pts-down':list.Status == 'DOWN','pts-nc':list.Status == 'SAME'}"></span>
            </td><!-- end ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td class="ih-t-color">
                <div class="ih-pt-ic ">
                    <div class="ih-pt-img"> <img
                            ng-src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/MI.png?v=2"
                            alt=""
                            src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/MI.png?v=2">
                    </div> <!-- <h2 class="ih-pt-cont mb-0 mob-hide">{{ titleCaseText(list.TeamName)}}</h2> -->
                    <h2 class="ih-pt-cont mb-0 ng-binding">MI</h2>
                    <!-- ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' -->
                </div>
            </td>
            <td class="ng-binding">14</td>
            <td class="ng-binding">4</td>
            <td class="ng-binding">10</td> <!--<td>{{ list.Tied }}</td>-->
            <td class="ng-binding">0</td>
            <td class="ng-binding">-0.584</td>
            <td class="ng-binding">2553/268.4</td>
            <td class="ng-binding">2636/261.2</td>
            <td class="bt ng-binding">8</td>
            <!-- ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
            <td class="ih-pt-fb-w mob-hide ng-scope"
                ng-if="pointsTableData[0].Performance != undefined &amp;&amp; pointsTableData[0].Performance != ''">
                <div class="ih-pt-fb ng-binding" style="justify-content: center"
                    ng-bind-html="bindRecentPerformance(list.Performance) | to_trusted"><span
                        class="rf L ih-pt-r">L</span><span class="rf L ih-pt-r">L</span><span
                        class="rf W ih-pt-g">W</span><span class="rf L ih-pt-r">L</span><span
                        class="rf W ih-pt-g">W</span></div>
            </td><!-- end ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
        </tr><!-- end ngRepeat: list in pointsTableData -->
        <tr class="team0 ng-scope" ng-repeat="list in pointsTableData">
            <!-- ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <td class="table-qualified ng-binding ng-scope"
                ng-if="pointsTableData[0].OrderNo != undefined &amp;&amp; pointsTableData[0].OrderNo != ''"> 10 </td>
            <!-- end ngIf: pointsTableData[0].OrderNo != undefined && pointsTableData[0].OrderNo != '' -->
            <!-- ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td ng-if="pointsTableData[0].Status != undefined &amp;&amp; pointsTableData[0].Status != ''"
                class="ng-scope"> <span class="posStatus  pts-nc"
                    ng-class="{'pts-up':list.Status == 'UP','pts-down':list.Status == 'DOWN','pts-nc':list.Status == 'SAME'}"></span>
            </td><!-- end ngIf: pointsTableData[0].Status != undefined && pointsTableData[0].Status != '' -->
            <td class="ih-t-color">
                <div class="ih-pt-ic ">
                    <div class="ih-pt-img"> <img
                            ng-src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/LSG.png?v=2"
                            alt=""
                            src="https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/LSG.png?v=2">
                    </div> <!-- <h2 class="ih-pt-cont mb-0 mob-hide">{{ titleCaseText(list.TeamName)}}</h2> -->
                    <h2 class="ih-pt-cont mb-0 ng-binding">LSG</h2>
                    <!-- ngIf: list.IsQualified != undefined && list.IsQualified != null && list.IsQualified !='' && list.IsQualified !='0' -->
                </div>
            </td>
            <td class="ng-binding">14</td>
            <td class="ng-binding">4</td>
            <td class="ng-binding">10</td> <!--<td>{{ list.Tied }}</td>-->
            <td class="ng-binding">0</td>
            <td class="ng-binding">-0.740</td>
            <td class="ng-binding">2514/275.3</td>
            <td class="ng-binding">2616/265.1</td>
            <td class="bt ng-binding">8</td>
            <!-- ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
            <td class="ih-pt-fb-w mob-hide ng-scope"
                ng-if="pointsTableData[0].Performance != undefined &amp;&amp; pointsTableData[0].Performance != ''">
                <div class="ih-pt-fb ng-binding" style="justify-content: center"
                    ng-bind-html="bindRecentPerformance(list.Performance) | to_trusted"><span
                        class="rf L ih-pt-r">L</span><span class="rf L ih-pt-r">L</span><span
                        class="rf W ih-pt-g">W</span><span class="rf L ih-pt-r">L</span><span
                        class="rf W ih-pt-g">W</span></div>
            </td><!-- end ngIf: pointsTableData[0].Performance != undefined && pointsTableData[0].Performance != '' -->
        </tr><!-- end ngRepeat: list in pointsTableData -->
    </tbody>
</table>


GT selector
selector = table[class="ih-td-tab"] tbody tr: nth-child(2) td:nth-child(3) div[class="ih-pt-ic "][class= "ih-pt-cont mb-0 ng-binding"]
got 1 / 1

GT points
points = table[class="ih-td-tab"] tbody tr: nth-child(2) td:nth-child(3) div[class="ih-pt-ic "][class= "ih-pt-cont mb-0 ng-binding"] :nth-child(2)
got 1 / 1




 */}
