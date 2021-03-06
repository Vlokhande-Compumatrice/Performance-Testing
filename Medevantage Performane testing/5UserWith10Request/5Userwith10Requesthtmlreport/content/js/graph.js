/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 602.0, "minX": 0.0, "maxY": 10671.0, "series": [{"data": [[0.0, 602.0], [0.1, 602.0], [0.2, 602.0], [0.3, 602.0], [0.4, 602.0], [0.5, 602.0], [0.6, 602.0], [0.7, 602.0], [0.8, 602.0], [0.9, 602.0], [1.0, 602.0], [1.1, 602.0], [1.2, 602.0], [1.3, 602.0], [1.4, 602.0], [1.5, 602.0], [1.6, 602.0], [1.7, 602.0], [1.8, 602.0], [1.9, 602.0], [2.0, 621.0], [2.1, 621.0], [2.2, 621.0], [2.3, 621.0], [2.4, 621.0], [2.5, 621.0], [2.6, 621.0], [2.7, 621.0], [2.8, 621.0], [2.9, 621.0], [3.0, 621.0], [3.1, 621.0], [3.2, 621.0], [3.3, 621.0], [3.4, 621.0], [3.5, 621.0], [3.6, 621.0], [3.7, 621.0], [3.8, 621.0], [3.9, 621.0], [4.0, 625.0], [4.1, 625.0], [4.2, 625.0], [4.3, 625.0], [4.4, 625.0], [4.5, 625.0], [4.6, 625.0], [4.7, 625.0], [4.8, 625.0], [4.9, 625.0], [5.0, 625.0], [5.1, 625.0], [5.2, 625.0], [5.3, 625.0], [5.4, 625.0], [5.5, 625.0], [5.6, 625.0], [5.7, 625.0], [5.8, 625.0], [5.9, 625.0], [6.0, 629.0], [6.1, 629.0], [6.2, 629.0], [6.3, 629.0], [6.4, 629.0], [6.5, 629.0], [6.6, 629.0], [6.7, 629.0], [6.8, 629.0], [6.9, 629.0], [7.0, 629.0], [7.1, 629.0], [7.2, 629.0], [7.3, 629.0], [7.4, 629.0], [7.5, 629.0], [7.6, 629.0], [7.7, 629.0], [7.8, 629.0], [7.9, 629.0], [8.0, 655.0], [8.1, 655.0], [8.2, 655.0], [8.3, 655.0], [8.4, 655.0], [8.5, 655.0], [8.6, 655.0], [8.7, 655.0], [8.8, 655.0], [8.9, 655.0], [9.0, 655.0], [9.1, 655.0], [9.2, 655.0], [9.3, 655.0], [9.4, 655.0], [9.5, 655.0], [9.6, 655.0], [9.7, 655.0], [9.8, 655.0], [9.9, 655.0], [10.0, 665.0], [10.1, 665.0], [10.2, 665.0], [10.3, 665.0], [10.4, 665.0], [10.5, 665.0], [10.6, 665.0], [10.7, 665.0], [10.8, 665.0], [10.9, 665.0], [11.0, 665.0], [11.1, 665.0], [11.2, 665.0], [11.3, 665.0], [11.4, 665.0], [11.5, 665.0], [11.6, 665.0], [11.7, 665.0], [11.8, 665.0], [11.9, 665.0], [12.0, 665.0], [12.1, 665.0], [12.2, 665.0], [12.3, 665.0], [12.4, 665.0], [12.5, 665.0], [12.6, 665.0], [12.7, 665.0], [12.8, 665.0], [12.9, 665.0], [13.0, 665.0], [13.1, 665.0], [13.2, 665.0], [13.3, 665.0], [13.4, 665.0], [13.5, 665.0], [13.6, 665.0], [13.7, 665.0], [13.8, 665.0], [13.9, 665.0], [14.0, 667.0], [14.1, 667.0], [14.2, 667.0], [14.3, 667.0], [14.4, 667.0], [14.5, 667.0], [14.6, 667.0], [14.7, 667.0], [14.8, 667.0], [14.9, 667.0], [15.0, 667.0], [15.1, 667.0], [15.2, 667.0], [15.3, 667.0], [15.4, 667.0], [15.5, 667.0], [15.6, 667.0], [15.7, 667.0], [15.8, 667.0], [15.9, 667.0], [16.0, 670.0], [16.1, 670.0], [16.2, 670.0], [16.3, 670.0], [16.4, 670.0], [16.5, 670.0], [16.6, 670.0], [16.7, 670.0], [16.8, 670.0], [16.9, 670.0], [17.0, 670.0], [17.1, 670.0], [17.2, 670.0], [17.3, 670.0], [17.4, 670.0], [17.5, 670.0], [17.6, 670.0], [17.7, 670.0], [17.8, 670.0], [17.9, 670.0], [18.0, 674.0], [18.1, 674.0], [18.2, 674.0], [18.3, 674.0], [18.4, 674.0], [18.5, 674.0], [18.6, 674.0], [18.7, 674.0], [18.8, 674.0], [18.9, 674.0], [19.0, 674.0], [19.1, 674.0], [19.2, 674.0], [19.3, 674.0], [19.4, 674.0], [19.5, 674.0], [19.6, 674.0], [19.7, 674.0], [19.8, 674.0], [19.9, 674.0], [20.0, 682.0], [20.1, 682.0], [20.2, 682.0], [20.3, 682.0], [20.4, 682.0], [20.5, 682.0], [20.6, 682.0], [20.7, 682.0], [20.8, 682.0], [20.9, 682.0], [21.0, 682.0], [21.1, 682.0], [21.2, 682.0], [21.3, 682.0], [21.4, 682.0], [21.5, 682.0], [21.6, 682.0], [21.7, 682.0], [21.8, 682.0], [21.9, 682.0], [22.0, 693.0], [22.1, 693.0], [22.2, 693.0], [22.3, 693.0], [22.4, 693.0], [22.5, 693.0], [22.6, 693.0], [22.7, 693.0], [22.8, 693.0], [22.9, 693.0], [23.0, 693.0], [23.1, 693.0], [23.2, 693.0], [23.3, 693.0], [23.4, 693.0], [23.5, 693.0], [23.6, 693.0], [23.7, 693.0], [23.8, 693.0], [23.9, 693.0], [24.0, 700.0], [24.1, 700.0], [24.2, 700.0], [24.3, 700.0], [24.4, 700.0], [24.5, 700.0], [24.6, 700.0], [24.7, 700.0], [24.8, 700.0], [24.9, 700.0], [25.0, 700.0], [25.1, 700.0], [25.2, 700.0], [25.3, 700.0], [25.4, 700.0], [25.5, 700.0], [25.6, 700.0], [25.7, 700.0], [25.8, 700.0], [25.9, 700.0], [26.0, 705.0], [26.1, 705.0], [26.2, 705.0], [26.3, 705.0], [26.4, 705.0], [26.5, 705.0], [26.6, 705.0], [26.7, 705.0], [26.8, 705.0], [26.9, 705.0], [27.0, 705.0], [27.1, 705.0], [27.2, 705.0], [27.3, 705.0], [27.4, 705.0], [27.5, 705.0], [27.6, 705.0], [27.7, 705.0], [27.8, 705.0], [27.9, 705.0], [28.0, 708.0], [28.1, 708.0], [28.2, 708.0], [28.3, 708.0], [28.4, 708.0], [28.5, 708.0], [28.6, 708.0], [28.7, 708.0], [28.8, 708.0], [28.9, 708.0], [29.0, 708.0], [29.1, 708.0], [29.2, 708.0], [29.3, 708.0], [29.4, 708.0], [29.5, 708.0], [29.6, 708.0], [29.7, 708.0], [29.8, 708.0], [29.9, 708.0], [30.0, 715.0], [30.1, 715.0], [30.2, 715.0], [30.3, 715.0], [30.4, 715.0], [30.5, 715.0], [30.6, 715.0], [30.7, 715.0], [30.8, 715.0], [30.9, 715.0], [31.0, 715.0], [31.1, 715.0], [31.2, 715.0], [31.3, 715.0], [31.4, 715.0], [31.5, 715.0], [31.6, 715.0], [31.7, 715.0], [31.8, 715.0], [31.9, 715.0], [32.0, 716.0], [32.1, 716.0], [32.2, 716.0], [32.3, 716.0], [32.4, 716.0], [32.5, 716.0], [32.6, 716.0], [32.7, 716.0], [32.8, 716.0], [32.9, 716.0], [33.0, 716.0], [33.1, 716.0], [33.2, 716.0], [33.3, 716.0], [33.4, 716.0], [33.5, 716.0], [33.6, 716.0], [33.7, 716.0], [33.8, 716.0], [33.9, 716.0], [34.0, 734.0], [34.1, 734.0], [34.2, 734.0], [34.3, 734.0], [34.4, 734.0], [34.5, 734.0], [34.6, 734.0], [34.7, 734.0], [34.8, 734.0], [34.9, 734.0], [35.0, 734.0], [35.1, 734.0], [35.2, 734.0], [35.3, 734.0], [35.4, 734.0], [35.5, 734.0], [35.6, 734.0], [35.7, 734.0], [35.8, 734.0], [35.9, 734.0], [36.0, 739.0], [36.1, 739.0], [36.2, 739.0], [36.3, 739.0], [36.4, 739.0], [36.5, 739.0], [36.6, 739.0], [36.7, 739.0], [36.8, 739.0], [36.9, 739.0], [37.0, 739.0], [37.1, 739.0], [37.2, 739.0], [37.3, 739.0], [37.4, 739.0], [37.5, 739.0], [37.6, 739.0], [37.7, 739.0], [37.8, 739.0], [37.9, 739.0], [38.0, 756.0], [38.1, 756.0], [38.2, 756.0], [38.3, 756.0], [38.4, 756.0], [38.5, 756.0], [38.6, 756.0], [38.7, 756.0], [38.8, 756.0], [38.9, 756.0], [39.0, 756.0], [39.1, 756.0], [39.2, 756.0], [39.3, 756.0], [39.4, 756.0], [39.5, 756.0], [39.6, 756.0], [39.7, 756.0], [39.8, 756.0], [39.9, 756.0], [40.0, 765.0], [40.1, 765.0], [40.2, 765.0], [40.3, 765.0], [40.4, 765.0], [40.5, 765.0], [40.6, 765.0], [40.7, 765.0], [40.8, 765.0], [40.9, 765.0], [41.0, 765.0], [41.1, 765.0], [41.2, 765.0], [41.3, 765.0], [41.4, 765.0], [41.5, 765.0], [41.6, 765.0], [41.7, 765.0], [41.8, 765.0], [41.9, 765.0], [42.0, 770.0], [42.1, 770.0], [42.2, 770.0], [42.3, 770.0], [42.4, 770.0], [42.5, 770.0], [42.6, 770.0], [42.7, 770.0], [42.8, 770.0], [42.9, 770.0], [43.0, 770.0], [43.1, 770.0], [43.2, 770.0], [43.3, 770.0], [43.4, 770.0], [43.5, 770.0], [43.6, 770.0], [43.7, 770.0], [43.8, 770.0], [43.9, 770.0], [44.0, 770.0], [44.1, 770.0], [44.2, 770.0], [44.3, 770.0], [44.4, 770.0], [44.5, 770.0], [44.6, 770.0], [44.7, 770.0], [44.8, 770.0], [44.9, 770.0], [45.0, 770.0], [45.1, 770.0], [45.2, 770.0], [45.3, 770.0], [45.4, 770.0], [45.5, 770.0], [45.6, 770.0], [45.7, 770.0], [45.8, 770.0], [45.9, 770.0], [46.0, 773.0], [46.1, 773.0], [46.2, 773.0], [46.3, 773.0], [46.4, 773.0], [46.5, 773.0], [46.6, 773.0], [46.7, 773.0], [46.8, 773.0], [46.9, 773.0], [47.0, 773.0], [47.1, 773.0], [47.2, 773.0], [47.3, 773.0], [47.4, 773.0], [47.5, 773.0], [47.6, 773.0], [47.7, 773.0], [47.8, 773.0], [47.9, 773.0], [48.0, 773.0], [48.1, 773.0], [48.2, 773.0], [48.3, 773.0], [48.4, 773.0], [48.5, 773.0], [48.6, 773.0], [48.7, 773.0], [48.8, 773.0], [48.9, 773.0], [49.0, 773.0], [49.1, 773.0], [49.2, 773.0], [49.3, 773.0], [49.4, 773.0], [49.5, 773.0], [49.6, 773.0], [49.7, 773.0], [49.8, 773.0], [49.9, 773.0], [50.0, 775.0], [50.1, 775.0], [50.2, 775.0], [50.3, 775.0], [50.4, 775.0], [50.5, 775.0], [50.6, 775.0], [50.7, 775.0], [50.8, 775.0], [50.9, 775.0], [51.0, 775.0], [51.1, 775.0], [51.2, 775.0], [51.3, 775.0], [51.4, 775.0], [51.5, 775.0], [51.6, 775.0], [51.7, 775.0], [51.8, 775.0], [51.9, 775.0], [52.0, 783.0], [52.1, 783.0], [52.2, 783.0], [52.3, 783.0], [52.4, 783.0], [52.5, 783.0], [52.6, 783.0], [52.7, 783.0], [52.8, 783.0], [52.9, 783.0], [53.0, 783.0], [53.1, 783.0], [53.2, 783.0], [53.3, 783.0], [53.4, 783.0], [53.5, 783.0], [53.6, 783.0], [53.7, 783.0], [53.8, 783.0], [53.9, 783.0], [54.0, 783.0], [54.1, 783.0], [54.2, 783.0], [54.3, 783.0], [54.4, 783.0], [54.5, 783.0], [54.6, 783.0], [54.7, 783.0], [54.8, 783.0], [54.9, 783.0], [55.0, 783.0], [55.1, 783.0], [55.2, 783.0], [55.3, 783.0], [55.4, 783.0], [55.5, 783.0], [55.6, 783.0], [55.7, 783.0], [55.8, 783.0], [55.9, 783.0], [56.0, 786.0], [56.1, 786.0], [56.2, 786.0], [56.3, 786.0], [56.4, 786.0], [56.5, 786.0], [56.6, 786.0], [56.7, 786.0], [56.8, 786.0], [56.9, 786.0], [57.0, 786.0], [57.1, 786.0], [57.2, 786.0], [57.3, 786.0], [57.4, 786.0], [57.5, 786.0], [57.6, 786.0], [57.7, 786.0], [57.8, 786.0], [57.9, 786.0], [58.0, 794.0], [58.1, 794.0], [58.2, 794.0], [58.3, 794.0], [58.4, 794.0], [58.5, 794.0], [58.6, 794.0], [58.7, 794.0], [58.8, 794.0], [58.9, 794.0], [59.0, 794.0], [59.1, 794.0], [59.2, 794.0], [59.3, 794.0], [59.4, 794.0], [59.5, 794.0], [59.6, 794.0], [59.7, 794.0], [59.8, 794.0], [59.9, 794.0], [60.0, 804.0], [60.1, 804.0], [60.2, 804.0], [60.3, 804.0], [60.4, 804.0], [60.5, 804.0], [60.6, 804.0], [60.7, 804.0], [60.8, 804.0], [60.9, 804.0], [61.0, 804.0], [61.1, 804.0], [61.2, 804.0], [61.3, 804.0], [61.4, 804.0], [61.5, 804.0], [61.6, 804.0], [61.7, 804.0], [61.8, 804.0], [61.9, 804.0], [62.0, 809.0], [62.1, 809.0], [62.2, 809.0], [62.3, 809.0], [62.4, 809.0], [62.5, 809.0], [62.6, 809.0], [62.7, 809.0], [62.8, 809.0], [62.9, 809.0], [63.0, 809.0], [63.1, 809.0], [63.2, 809.0], [63.3, 809.0], [63.4, 809.0], [63.5, 809.0], [63.6, 809.0], [63.7, 809.0], [63.8, 809.0], [63.9, 809.0], [64.0, 812.0], [64.1, 812.0], [64.2, 812.0], [64.3, 812.0], [64.4, 812.0], [64.5, 812.0], [64.6, 812.0], [64.7, 812.0], [64.8, 812.0], [64.9, 812.0], [65.0, 812.0], [65.1, 812.0], [65.2, 812.0], [65.3, 812.0], [65.4, 812.0], [65.5, 812.0], [65.6, 812.0], [65.7, 812.0], [65.8, 812.0], [65.9, 812.0], [66.0, 813.0], [66.1, 813.0], [66.2, 813.0], [66.3, 813.0], [66.4, 813.0], [66.5, 813.0], [66.6, 813.0], [66.7, 813.0], [66.8, 813.0], [66.9, 813.0], [67.0, 813.0], [67.1, 813.0], [67.2, 813.0], [67.3, 813.0], [67.4, 813.0], [67.5, 813.0], [67.6, 813.0], [67.7, 813.0], [67.8, 813.0], [67.9, 813.0], [68.0, 813.0], [68.1, 813.0], [68.2, 813.0], [68.3, 813.0], [68.4, 813.0], [68.5, 813.0], [68.6, 813.0], [68.7, 813.0], [68.8, 813.0], [68.9, 813.0], [69.0, 813.0], [69.1, 813.0], [69.2, 813.0], [69.3, 813.0], [69.4, 813.0], [69.5, 813.0], [69.6, 813.0], [69.7, 813.0], [69.8, 813.0], [69.9, 813.0], [70.0, 817.0], [70.1, 817.0], [70.2, 817.0], [70.3, 817.0], [70.4, 817.0], [70.5, 817.0], [70.6, 817.0], [70.7, 817.0], [70.8, 817.0], [70.9, 817.0], [71.0, 817.0], [71.1, 817.0], [71.2, 817.0], [71.3, 817.0], [71.4, 817.0], [71.5, 817.0], [71.6, 817.0], [71.7, 817.0], [71.8, 817.0], [71.9, 817.0], [72.0, 825.0], [72.1, 825.0], [72.2, 825.0], [72.3, 825.0], [72.4, 825.0], [72.5, 825.0], [72.6, 825.0], [72.7, 825.0], [72.8, 825.0], [72.9, 825.0], [73.0, 825.0], [73.1, 825.0], [73.2, 825.0], [73.3, 825.0], [73.4, 825.0], [73.5, 825.0], [73.6, 825.0], [73.7, 825.0], [73.8, 825.0], [73.9, 825.0], [74.0, 828.0], [74.1, 828.0], [74.2, 828.0], [74.3, 828.0], [74.4, 828.0], [74.5, 828.0], [74.6, 828.0], [74.7, 828.0], [74.8, 828.0], [74.9, 828.0], [75.0, 828.0], [75.1, 828.0], [75.2, 828.0], [75.3, 828.0], [75.4, 828.0], [75.5, 828.0], [75.6, 828.0], [75.7, 828.0], [75.8, 828.0], [75.9, 828.0], [76.0, 830.0], [76.1, 830.0], [76.2, 830.0], [76.3, 830.0], [76.4, 830.0], [76.5, 830.0], [76.6, 830.0], [76.7, 830.0], [76.8, 830.0], [76.9, 830.0], [77.0, 830.0], [77.1, 830.0], [77.2, 830.0], [77.3, 830.0], [77.4, 830.0], [77.5, 830.0], [77.6, 830.0], [77.7, 830.0], [77.8, 830.0], [77.9, 830.0], [78.0, 846.0], [78.1, 846.0], [78.2, 846.0], [78.3, 846.0], [78.4, 846.0], [78.5, 846.0], [78.6, 846.0], [78.7, 846.0], [78.8, 846.0], [78.9, 846.0], [79.0, 846.0], [79.1, 846.0], [79.2, 846.0], [79.3, 846.0], [79.4, 846.0], [79.5, 846.0], [79.6, 846.0], [79.7, 846.0], [79.8, 846.0], [79.9, 846.0], [80.0, 879.0], [80.1, 879.0], [80.2, 879.0], [80.3, 879.0], [80.4, 879.0], [80.5, 879.0], [80.6, 879.0], [80.7, 879.0], [80.8, 879.0], [80.9, 879.0], [81.0, 879.0], [81.1, 879.0], [81.2, 879.0], [81.3, 879.0], [81.4, 879.0], [81.5, 879.0], [81.6, 879.0], [81.7, 879.0], [81.8, 879.0], [81.9, 879.0], [82.0, 1010.0], [82.1, 1010.0], [82.2, 1010.0], [82.3, 1010.0], [82.4, 1010.0], [82.5, 1010.0], [82.6, 1010.0], [82.7, 1010.0], [82.8, 1010.0], [82.9, 1010.0], [83.0, 1010.0], [83.1, 1010.0], [83.2, 1010.0], [83.3, 1010.0], [83.4, 1010.0], [83.5, 1010.0], [83.6, 1010.0], [83.7, 1010.0], [83.8, 1010.0], [83.9, 1010.0], [84.0, 1013.0], [84.1, 1013.0], [84.2, 1013.0], [84.3, 1013.0], [84.4, 1013.0], [84.5, 1013.0], [84.6, 1013.0], [84.7, 1013.0], [84.8, 1013.0], [84.9, 1013.0], [85.0, 1013.0], [85.1, 1013.0], [85.2, 1013.0], [85.3, 1013.0], [85.4, 1013.0], [85.5, 1013.0], [85.6, 1013.0], [85.7, 1013.0], [85.8, 1013.0], [85.9, 1013.0], [86.0, 1547.0], [86.1, 1547.0], [86.2, 1547.0], [86.3, 1547.0], [86.4, 1547.0], [86.5, 1547.0], [86.6, 1547.0], [86.7, 1547.0], [86.8, 1547.0], [86.9, 1547.0], [87.0, 1547.0], [87.1, 1547.0], [87.2, 1547.0], [87.3, 1547.0], [87.4, 1547.0], [87.5, 1547.0], [87.6, 1547.0], [87.7, 1547.0], [87.8, 1547.0], [87.9, 1547.0], [88.0, 2246.0], [88.1, 2246.0], [88.2, 2246.0], [88.3, 2246.0], [88.4, 2246.0], [88.5, 2246.0], [88.6, 2246.0], [88.7, 2246.0], [88.8, 2246.0], [88.9, 2246.0], [89.0, 2246.0], [89.1, 2246.0], [89.2, 2246.0], [89.3, 2246.0], [89.4, 2246.0], [89.5, 2246.0], [89.6, 2246.0], [89.7, 2246.0], [89.8, 2246.0], [89.9, 2246.0], [90.0, 2419.0], [90.1, 2419.0], [90.2, 2419.0], [90.3, 2419.0], [90.4, 2419.0], [90.5, 2419.0], [90.6, 2419.0], [90.7, 2419.0], [90.8, 2419.0], [90.9, 2419.0], [91.0, 2419.0], [91.1, 2419.0], [91.2, 2419.0], [91.3, 2419.0], [91.4, 2419.0], [91.5, 2419.0], [91.6, 2419.0], [91.7, 2419.0], [91.8, 2419.0], [91.9, 2419.0], [92.0, 2745.0], [92.1, 2745.0], [92.2, 2745.0], [92.3, 2745.0], [92.4, 2745.0], [92.5, 2745.0], [92.6, 2745.0], [92.7, 2745.0], [92.8, 2745.0], [92.9, 2745.0], [93.0, 2745.0], [93.1, 2745.0], [93.2, 2745.0], [93.3, 2745.0], [93.4, 2745.0], [93.5, 2745.0], [93.6, 2745.0], [93.7, 2745.0], [93.8, 2745.0], [93.9, 2745.0], [94.0, 2760.0], [94.1, 2760.0], [94.2, 2760.0], [94.3, 2760.0], [94.4, 2760.0], [94.5, 2760.0], [94.6, 2760.0], [94.7, 2760.0], [94.8, 2760.0], [94.9, 2760.0], [95.0, 2760.0], [95.1, 2760.0], [95.2, 2760.0], [95.3, 2760.0], [95.4, 2760.0], [95.5, 2760.0], [95.6, 2760.0], [95.7, 2760.0], [95.8, 2760.0], [95.9, 2760.0], [96.0, 2921.0], [96.1, 2921.0], [96.2, 2921.0], [96.3, 2921.0], [96.4, 2921.0], [96.5, 2921.0], [96.6, 2921.0], [96.7, 2921.0], [96.8, 2921.0], [96.9, 2921.0], [97.0, 2921.0], [97.1, 2921.0], [97.2, 2921.0], [97.3, 2921.0], [97.4, 2921.0], [97.5, 2921.0], [97.6, 2921.0], [97.7, 2921.0], [97.8, 2921.0], [97.9, 2921.0], [98.0, 10671.0], [98.1, 10671.0], [98.2, 10671.0], [98.3, 10671.0], [98.4, 10671.0], [98.5, 10671.0], [98.6, 10671.0], [98.7, 10671.0], [98.8, 10671.0], [98.9, 10671.0], [99.0, 10671.0], [99.1, 10671.0], [99.2, 10671.0], [99.3, 10671.0], [99.4, 10671.0], [99.5, 10671.0], [99.6, 10671.0], [99.7, 10671.0], [99.8, 10671.0], [99.9, 10671.0]], "isOverall": false, "label": "5User1Ramp10loop", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 18.0, "series": [{"data": [[2200.0, 1.0], [2400.0, 1.0], [600.0, 12.0], [10600.0, 1.0], [2700.0, 2.0], [700.0, 18.0], [2900.0, 1.0], [1500.0, 1.0], [800.0, 11.0], [1000.0, 2.0]], "isOverall": false, "label": "5User1Ramp10loop", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 43.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 43.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.5913851E12, "maxY": 5.0, "series": [{"data": [[1.591386E12, 5.0], [1.5913851E12, 5.0], [1.59138672E12, 3.0], [1.59138528E12, 5.0], [1.59138654E12, 5.0], [1.59138546E12, 5.0], [1.59138636E12, 5.0], [1.59138564E12, 5.0], [1.59138618E12, 5.0], [1.59138582E12, 5.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59138672E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 625.0, "minX": 1.0, "maxY": 1192.891304347826, "series": [{"data": [[4.0, 828.0], [2.0, 700.0], [1.0, 625.0], [5.0, 1192.891304347826], [3.0, 775.0]], "isOverall": false, "label": "5User1Ramp10loop", "isController": false}, {"data": [[4.800000000000001, 1156.02]], "isOverall": false, "label": "5User1Ramp10loop-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 414.56666666666666, "minX": 1.5913851E12, "maxY": 769.3, "series": [{"data": [[1.591386E12, 419.23333333333335], [1.5913851E12, 432.06666666666666], [1.59138672E12, 414.6], [1.59138528E12, 423.25], [1.59138654E12, 414.65], [1.59138546E12, 416.8666666666667], [1.59138636E12, 414.56666666666666], [1.59138564E12, 423.51666666666665], [1.59138618E12, 414.5833333333333], [1.59138582E12, 419.18333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.591386E12, 769.2666666666667], [1.5913851E12, 769.1], [1.59138672E12, 769.0666666666667], [1.59138528E12, 769.0666666666667], [1.59138654E12, 769.1], [1.59138546E12, 769.1833333333333], [1.59138636E12, 769.0333333333333], [1.59138564E12, 769.3], [1.59138618E12, 769.05], [1.59138582E12, 769.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59138672E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 701.4, "minX": 1.5913851E12, "maxY": 2737.2, "series": [{"data": [[1.591386E12, 2737.2], [1.5913851E12, 2618.2], [1.59138672E12, 742.8], [1.59138528E12, 761.6], [1.59138654E12, 760.4], [1.59138546E12, 734.6], [1.59138636E12, 731.2], [1.59138564E12, 783.0], [1.59138618E12, 701.4], [1.59138582E12, 989.8]], "isOverall": false, "label": "5User1Ramp10loop", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59138672E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 701.4, "minX": 1.5913851E12, "maxY": 2737.0, "series": [{"data": [[1.591386E12, 2737.0], [1.5913851E12, 2618.2], [1.59138672E12, 742.6], [1.59138528E12, 761.4], [1.59138654E12, 760.4], [1.59138546E12, 734.4], [1.59138636E12, 731.0], [1.59138564E12, 783.0], [1.59138618E12, 701.4], [1.59138582E12, 989.6]], "isOverall": false, "label": "5User1Ramp10loop", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59138672E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 15.0, "minX": 1.5913851E12, "maxY": 1407.0, "series": [{"data": [[1.591386E12, 15.6], [1.5913851E12, 1407.0], [1.59138672E12, 34.0], [1.59138528E12, 16.4], [1.59138654E12, 16.4], [1.59138546E12, 15.0], [1.59138636E12, 16.0], [1.59138564E12, 16.0], [1.59138618E12, 15.8], [1.59138582E12, 34.6]], "isOverall": false, "label": "5User1Ramp10loop", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59138672E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 602.0, "minX": 1.5913851E12, "maxY": 10671.0, "series": [{"data": [[1.591386E12, 10671.0], [1.5913851E12, 2921.0], [1.59138672E12, 828.0], [1.59138528E12, 812.0], [1.59138654E12, 879.0], [1.59138546E12, 813.0], [1.59138636E12, 813.0], [1.59138564E12, 846.0], [1.59138618E12, 770.0], [1.59138582E12, 1547.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.591386E12, 665.0], [1.5913851E12, 2246.0], [1.59138672E12, 625.0], [1.59138528E12, 667.0], [1.59138654E12, 655.0], [1.59138546E12, 621.0], [1.59138636E12, 629.0], [1.59138564E12, 665.0], [1.59138618E12, 602.0], [1.59138582E12, 674.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.591386E12, 10671.0], [1.5913851E12, 2921.0], [1.59138672E12, 828.0], [1.59138528E12, 812.0], [1.59138654E12, 879.0], [1.59138546E12, 813.0], [1.59138636E12, 813.0], [1.59138564E12, 846.0], [1.59138618E12, 770.0], [1.59138582E12, 1547.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.591386E12, 10671.0], [1.5913851E12, 2921.0], [1.59138672E12, 828.0], [1.59138528E12, 812.0], [1.59138654E12, 879.0], [1.59138546E12, 813.0], [1.59138636E12, 813.0], [1.59138564E12, 846.0], [1.59138618E12, 770.0], [1.59138582E12, 1547.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.591386E12, 10671.0], [1.5913851E12, 2921.0], [1.59138672E12, 828.0], [1.59138528E12, 812.0], [1.59138654E12, 879.0], [1.59138546E12, 813.0], [1.59138636E12, 813.0], [1.59138564E12, 846.0], [1.59138618E12, 770.0], [1.59138582E12, 1547.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59138672E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 670.5, "minX": 1.0, "maxY": 2745.0, "series": [{"data": [[1.0, 670.5], [4.0, 778.0], [2.0, 747.5], [5.0, 2745.0], [3.0, 813.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 670.5, "minX": 1.0, "maxY": 2745.0, "series": [{"data": [[1.0, 670.5], [4.0, 778.0], [2.0, 747.5], [5.0, 2745.0], [3.0, 812.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.5913851E12, "maxY": 0.08333333333333333, "series": [{"data": [[1.591386E12, 0.08333333333333333], [1.5913851E12, 0.08333333333333333], [1.59138672E12, 0.08333333333333333], [1.59138528E12, 0.08333333333333333], [1.59138654E12, 0.08333333333333333], [1.59138546E12, 0.08333333333333333], [1.59138636E12, 0.08333333333333333], [1.59138564E12, 0.08333333333333333], [1.59138618E12, 0.08333333333333333], [1.59138582E12, 0.08333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59138672E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.5913851E12, "maxY": 0.08333333333333333, "series": [{"data": [[1.591386E12, 0.08333333333333333], [1.5913851E12, 0.08333333333333333], [1.59138672E12, 0.08333333333333333], [1.59138528E12, 0.08333333333333333], [1.59138654E12, 0.08333333333333333], [1.59138546E12, 0.08333333333333333], [1.59138636E12, 0.08333333333333333], [1.59138564E12, 0.08333333333333333], [1.59138618E12, 0.08333333333333333], [1.59138582E12, 0.08333333333333333]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59138672E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.5913851E12, "maxY": 0.08333333333333333, "series": [{"data": [[1.591386E12, 0.08333333333333333], [1.5913851E12, 0.08333333333333333], [1.59138672E12, 0.08333333333333333], [1.59138528E12, 0.08333333333333333], [1.59138654E12, 0.08333333333333333], [1.59138546E12, 0.08333333333333333], [1.59138636E12, 0.08333333333333333], [1.59138564E12, 0.08333333333333333], [1.59138618E12, 0.08333333333333333], [1.59138582E12, 0.08333333333333333]], "isOverall": false, "label": "5User1Ramp10loop-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59138672E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.5913851E12, "maxY": 0.08333333333333333, "series": [{"data": [[1.591386E12, 0.08333333333333333], [1.5913851E12, 0.08333333333333333], [1.59138672E12, 0.08333333333333333], [1.59138528E12, 0.08333333333333333], [1.59138654E12, 0.08333333333333333], [1.59138546E12, 0.08333333333333333], [1.59138636E12, 0.08333333333333333], [1.59138564E12, 0.08333333333333333], [1.59138618E12, 0.08333333333333333], [1.59138582E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59138672E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

