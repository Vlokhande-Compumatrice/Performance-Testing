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
        data: {"result": {"minY": 279.0, "minX": 0.0, "maxY": 83070.0, "series": [{"data": [[0.0, 279.0], [0.1, 279.0], [0.2, 402.0], [0.3, 402.0], [0.4, 417.0], [0.5, 417.0], [0.6, 417.0], [0.7, 423.0], [0.8, 434.0], [0.9, 434.0], [1.0, 530.0], [1.1, 530.0], [1.2, 559.0], [1.3, 559.0], [1.4, 562.0], [1.5, 562.0], [1.6, 575.0], [1.7, 575.0], [1.8, 604.0], [1.9, 604.0], [2.0, 607.0], [2.1, 607.0], [2.2, 607.0], [2.3, 607.0], [2.4, 608.0], [2.5, 608.0], [2.6, 609.0], [2.7, 609.0], [2.8, 609.0], [2.9, 609.0], [3.0, 610.0], [3.1, 610.0], [3.2, 612.0], [3.3, 612.0], [3.4, 612.0], [3.5, 613.0], [3.6, 613.0], [3.7, 613.0], [3.8, 613.0], [3.9, 613.0], [4.0, 617.0], [4.1, 617.0], [4.2, 618.0], [4.3, 618.0], [4.4, 621.0], [4.5, 621.0], [4.6, 621.0], [4.7, 622.0], [4.8, 622.0], [4.9, 622.0], [5.0, 622.0], [5.1, 627.0], [5.2, 627.0], [5.3, 628.0], [5.4, 628.0], [5.5, 628.0], [5.6, 628.0], [5.7, 629.0], [5.8, 629.0], [5.9, 630.0], [6.0, 630.0], [6.1, 632.0], [6.2, 632.0], [6.3, 632.0], [6.4, 632.0], [6.5, 632.0], [6.6, 632.0], [6.7, 632.0], [6.8, 632.0], [6.9, 636.0], [7.0, 636.0], [7.1, 639.0], [7.2, 639.0], [7.3, 640.0], [7.4, 640.0], [7.5, 641.0], [7.6, 641.0], [7.7, 641.0], [7.8, 641.0], [7.9, 643.0], [8.0, 643.0], [8.1, 644.0], [8.2, 644.0], [8.3, 645.0], [8.4, 645.0], [8.5, 645.0], [8.6, 645.0], [8.7, 646.0], [8.8, 646.0], [8.9, 646.0], [9.0, 646.0], [9.1, 647.0], [9.2, 647.0], [9.3, 647.0], [9.4, 647.0], [9.5, 649.0], [9.6, 649.0], [9.7, 649.0], [9.8, 649.0], [9.9, 651.0], [10.0, 651.0], [10.1, 651.0], [10.2, 651.0], [10.3, 654.0], [10.4, 654.0], [10.5, 655.0], [10.6, 655.0], [10.7, 657.0], [10.8, 658.0], [10.9, 658.0], [11.0, 659.0], [11.1, 659.0], [11.2, 659.0], [11.3, 659.0], [11.4, 659.0], [11.5, 659.0], [11.6, 660.0], [11.7, 660.0], [11.8, 661.0], [11.9, 661.0], [12.0, 662.0], [12.1, 662.0], [12.2, 663.0], [12.3, 663.0], [12.4, 663.0], [12.5, 663.0], [12.6, 664.0], [12.7, 664.0], [12.8, 664.0], [12.9, 664.0], [13.0, 664.0], [13.1, 664.0], [13.2, 664.0], [13.3, 664.0], [13.4, 666.0], [13.5, 666.0], [13.6, 667.0], [13.7, 667.0], [13.8, 667.0], [13.9, 667.0], [14.0, 667.0], [14.1, 667.0], [14.2, 668.0], [14.3, 668.0], [14.4, 668.0], [14.5, 668.0], [14.6, 669.0], [14.7, 669.0], [14.8, 669.0], [14.9, 669.0], [15.0, 670.0], [15.1, 670.0], [15.2, 670.0], [15.3, 670.0], [15.4, 670.0], [15.5, 670.0], [15.6, 671.0], [15.7, 671.0], [15.8, 671.0], [15.9, 671.0], [16.0, 671.0], [16.1, 671.0], [16.2, 671.0], [16.3, 671.0], [16.4, 672.0], [16.5, 672.0], [16.6, 673.0], [16.7, 673.0], [16.8, 674.0], [16.9, 674.0], [17.0, 675.0], [17.1, 675.0], [17.2, 676.0], [17.3, 676.0], [17.4, 679.0], [17.5, 679.0], [17.6, 683.0], [17.7, 683.0], [17.8, 686.0], [17.9, 686.0], [18.0, 686.0], [18.1, 686.0], [18.2, 687.0], [18.3, 687.0], [18.4, 690.0], [18.5, 690.0], [18.6, 690.0], [18.7, 690.0], [18.8, 690.0], [18.9, 690.0], [19.0, 691.0], [19.1, 691.0], [19.2, 692.0], [19.3, 692.0], [19.4, 694.0], [19.5, 694.0], [19.6, 694.0], [19.7, 694.0], [19.8, 703.0], [19.9, 703.0], [20.0, 703.0], [20.1, 703.0], [20.2, 705.0], [20.3, 705.0], [20.4, 705.0], [20.5, 705.0], [20.6, 705.0], [20.7, 705.0], [20.8, 706.0], [20.9, 706.0], [21.0, 707.0], [21.1, 707.0], [21.2, 707.0], [21.3, 707.0], [21.4, 708.0], [21.5, 708.0], [21.6, 710.0], [21.7, 710.0], [21.8, 711.0], [21.9, 711.0], [22.0, 711.0], [22.1, 711.0], [22.2, 712.0], [22.3, 712.0], [22.4, 712.0], [22.5, 712.0], [22.6, 712.0], [22.7, 712.0], [22.8, 713.0], [22.9, 713.0], [23.0, 713.0], [23.1, 713.0], [23.2, 714.0], [23.3, 714.0], [23.4, 714.0], [23.5, 714.0], [23.6, 715.0], [23.7, 715.0], [23.8, 715.0], [23.9, 715.0], [24.0, 717.0], [24.1, 717.0], [24.2, 717.0], [24.3, 717.0], [24.4, 718.0], [24.5, 718.0], [24.6, 718.0], [24.7, 718.0], [24.8, 719.0], [24.9, 719.0], [25.0, 719.0], [25.1, 719.0], [25.2, 720.0], [25.3, 720.0], [25.4, 721.0], [25.5, 721.0], [25.6, 722.0], [25.7, 722.0], [25.8, 723.0], [25.9, 723.0], [26.0, 724.0], [26.1, 724.0], [26.2, 725.0], [26.3, 725.0], [26.4, 725.0], [26.5, 725.0], [26.6, 726.0], [26.7, 726.0], [26.8, 726.0], [26.9, 726.0], [27.0, 728.0], [27.1, 728.0], [27.2, 729.0], [27.3, 729.0], [27.4, 730.0], [27.5, 730.0], [27.6, 730.0], [27.7, 730.0], [27.8, 731.0], [27.9, 731.0], [28.0, 736.0], [28.1, 736.0], [28.2, 737.0], [28.3, 737.0], [28.4, 739.0], [28.5, 739.0], [28.6, 741.0], [28.7, 741.0], [28.8, 741.0], [28.9, 741.0], [29.0, 742.0], [29.1, 742.0], [29.2, 744.0], [29.3, 744.0], [29.4, 745.0], [29.5, 745.0], [29.6, 748.0], [29.7, 748.0], [29.8, 753.0], [29.9, 753.0], [30.0, 753.0], [30.1, 753.0], [30.2, 753.0], [30.3, 753.0], [30.4, 754.0], [30.5, 754.0], [30.6, 756.0], [30.7, 756.0], [30.8, 757.0], [30.9, 757.0], [31.0, 757.0], [31.1, 757.0], [31.2, 758.0], [31.3, 758.0], [31.4, 759.0], [31.5, 759.0], [31.6, 759.0], [31.7, 759.0], [31.8, 759.0], [31.9, 759.0], [32.0, 761.0], [32.1, 761.0], [32.2, 761.0], [32.3, 761.0], [32.4, 762.0], [32.5, 762.0], [32.6, 762.0], [32.7, 762.0], [32.8, 763.0], [32.9, 763.0], [33.0, 764.0], [33.1, 764.0], [33.2, 765.0], [33.3, 765.0], [33.4, 765.0], [33.5, 765.0], [33.6, 766.0], [33.7, 766.0], [33.8, 766.0], [33.9, 766.0], [34.0, 768.0], [34.1, 768.0], [34.2, 768.0], [34.3, 768.0], [34.4, 769.0], [34.5, 769.0], [34.6, 771.0], [34.7, 771.0], [34.8, 772.0], [34.9, 772.0], [35.0, 773.0], [35.1, 773.0], [35.2, 775.0], [35.3, 775.0], [35.4, 778.0], [35.5, 778.0], [35.6, 778.0], [35.7, 778.0], [35.8, 782.0], [35.9, 782.0], [36.0, 783.0], [36.1, 783.0], [36.2, 785.0], [36.3, 785.0], [36.4, 791.0], [36.5, 791.0], [36.6, 791.0], [36.7, 791.0], [36.8, 793.0], [36.9, 793.0], [37.0, 793.0], [37.1, 793.0], [37.2, 795.0], [37.3, 795.0], [37.4, 795.0], [37.5, 795.0], [37.6, 797.0], [37.7, 797.0], [37.8, 798.0], [37.9, 798.0], [38.0, 798.0], [38.1, 798.0], [38.2, 798.0], [38.3, 798.0], [38.4, 801.0], [38.5, 801.0], [38.6, 801.0], [38.7, 801.0], [38.8, 802.0], [38.9, 802.0], [39.0, 802.0], [39.1, 802.0], [39.2, 804.0], [39.3, 804.0], [39.4, 805.0], [39.5, 805.0], [39.6, 805.0], [39.7, 805.0], [39.8, 805.0], [39.9, 805.0], [40.0, 806.0], [40.1, 806.0], [40.2, 808.0], [40.3, 808.0], [40.4, 811.0], [40.5, 811.0], [40.6, 815.0], [40.7, 815.0], [40.8, 817.0], [40.9, 817.0], [41.0, 819.0], [41.1, 819.0], [41.2, 819.0], [41.3, 819.0], [41.4, 819.0], [41.5, 819.0], [41.6, 822.0], [41.7, 822.0], [41.8, 822.0], [41.9, 823.0], [42.0, 823.0], [42.1, 825.0], [42.2, 825.0], [42.3, 826.0], [42.4, 826.0], [42.5, 827.0], [42.6, 827.0], [42.7, 829.0], [42.8, 829.0], [42.9, 831.0], [43.0, 831.0], [43.1, 833.0], [43.2, 833.0], [43.3, 835.0], [43.4, 835.0], [43.5, 836.0], [43.6, 836.0], [43.7, 836.0], [43.8, 836.0], [43.9, 840.0], [44.0, 840.0], [44.1, 840.0], [44.2, 840.0], [44.3, 841.0], [44.4, 841.0], [44.5, 843.0], [44.6, 843.0], [44.7, 844.0], [44.8, 844.0], [44.9, 844.0], [45.0, 844.0], [45.1, 844.0], [45.2, 844.0], [45.3, 846.0], [45.4, 846.0], [45.5, 847.0], [45.6, 847.0], [45.7, 847.0], [45.8, 847.0], [45.9, 847.0], [46.0, 847.0], [46.1, 848.0], [46.2, 848.0], [46.3, 848.0], [46.4, 848.0], [46.5, 854.0], [46.6, 854.0], [46.7, 854.0], [46.8, 854.0], [46.9, 854.0], [47.0, 854.0], [47.1, 855.0], [47.2, 855.0], [47.3, 856.0], [47.4, 856.0], [47.5, 857.0], [47.6, 857.0], [47.7, 857.0], [47.8, 857.0], [47.9, 861.0], [48.0, 861.0], [48.1, 863.0], [48.2, 863.0], [48.3, 867.0], [48.4, 867.0], [48.5, 867.0], [48.6, 867.0], [48.7, 869.0], [48.8, 869.0], [48.9, 872.0], [49.0, 872.0], [49.1, 875.0], [49.2, 875.0], [49.3, 877.0], [49.4, 877.0], [49.5, 881.0], [49.6, 881.0], [49.7, 882.0], [49.8, 882.0], [49.9, 883.0], [50.0, 883.0], [50.1, 885.0], [50.2, 885.0], [50.3, 891.0], [50.4, 891.0], [50.5, 893.0], [50.6, 893.0], [50.7, 895.0], [50.8, 895.0], [50.9, 899.0], [51.0, 899.0], [51.1, 900.0], [51.2, 900.0], [51.3, 900.0], [51.4, 900.0], [51.5, 900.0], [51.6, 900.0], [51.7, 901.0], [51.8, 901.0], [51.9, 906.0], [52.0, 906.0], [52.1, 906.0], [52.2, 906.0], [52.3, 907.0], [52.4, 907.0], [52.5, 914.0], [52.6, 914.0], [52.7, 914.0], [52.8, 914.0], [52.9, 915.0], [53.0, 915.0], [53.1, 919.0], [53.2, 919.0], [53.3, 920.0], [53.4, 920.0], [53.5, 920.0], [53.6, 920.0], [53.7, 920.0], [53.8, 920.0], [53.9, 921.0], [54.0, 921.0], [54.1, 922.0], [54.2, 922.0], [54.3, 922.0], [54.4, 922.0], [54.5, 922.0], [54.6, 922.0], [54.7, 924.0], [54.8, 924.0], [54.9, 926.0], [55.0, 926.0], [55.1, 927.0], [55.2, 927.0], [55.3, 927.0], [55.4, 927.0], [55.5, 927.0], [55.6, 927.0], [55.7, 934.0], [55.8, 934.0], [55.9, 935.0], [56.0, 935.0], [56.1, 941.0], [56.2, 941.0], [56.3, 941.0], [56.4, 941.0], [56.5, 942.0], [56.6, 942.0], [56.7, 949.0], [56.8, 949.0], [56.9, 954.0], [57.0, 954.0], [57.1, 955.0], [57.2, 955.0], [57.3, 957.0], [57.4, 957.0], [57.5, 957.0], [57.6, 957.0], [57.7, 958.0], [57.8, 958.0], [57.9, 958.0], [58.0, 958.0], [58.1, 959.0], [58.2, 959.0], [58.3, 964.0], [58.4, 964.0], [58.5, 964.0], [58.6, 964.0], [58.7, 964.0], [58.8, 964.0], [58.9, 966.0], [59.0, 966.0], [59.1, 969.0], [59.2, 969.0], [59.3, 971.0], [59.4, 971.0], [59.5, 971.0], [59.6, 971.0], [59.7, 972.0], [59.8, 972.0], [59.9, 976.0], [60.0, 976.0], [60.1, 987.0], [60.2, 987.0], [60.3, 992.0], [60.4, 992.0], [60.5, 994.0], [60.6, 994.0], [60.7, 997.0], [60.8, 997.0], [60.9, 1003.0], [61.0, 1003.0], [61.1, 1003.0], [61.2, 1003.0], [61.3, 1004.0], [61.4, 1004.0], [61.5, 1005.0], [61.6, 1005.0], [61.7, 1006.0], [61.8, 1006.0], [61.9, 1006.0], [62.0, 1006.0], [62.1, 1008.0], [62.2, 1008.0], [62.3, 1012.0], [62.4, 1012.0], [62.5, 1012.0], [62.6, 1012.0], [62.7, 1013.0], [62.8, 1013.0], [62.9, 1013.0], [63.0, 1013.0], [63.1, 1016.0], [63.2, 1016.0], [63.3, 1017.0], [63.4, 1017.0], [63.5, 1019.0], [63.6, 1019.0], [63.7, 1023.0], [63.8, 1023.0], [63.9, 1023.0], [64.0, 1023.0], [64.1, 1024.0], [64.2, 1024.0], [64.3, 1024.0], [64.4, 1024.0], [64.5, 1024.0], [64.6, 1024.0], [64.7, 1024.0], [64.8, 1024.0], [64.9, 1026.0], [65.0, 1026.0], [65.1, 1029.0], [65.2, 1029.0], [65.3, 1033.0], [65.4, 1033.0], [65.5, 1034.0], [65.6, 1034.0], [65.7, 1045.0], [65.8, 1045.0], [65.9, 1045.0], [66.0, 1045.0], [66.1, 1061.0], [66.2, 1061.0], [66.3, 1063.0], [66.4, 1063.0], [66.5, 1068.0], [66.6, 1068.0], [66.7, 1068.0], [66.8, 1068.0], [66.9, 1070.0], [67.0, 1070.0], [67.1, 1072.0], [67.2, 1072.0], [67.3, 1084.0], [67.4, 1084.0], [67.5, 1086.0], [67.6, 1086.0], [67.7, 1089.0], [67.8, 1089.0], [67.9, 1100.0], [68.0, 1100.0], [68.1, 1106.0], [68.2, 1106.0], [68.3, 1106.0], [68.4, 1106.0], [68.5, 1109.0], [68.6, 1109.0], [68.7, 1110.0], [68.8, 1110.0], [68.9, 1114.0], [69.0, 1114.0], [69.1, 1115.0], [69.2, 1115.0], [69.3, 1116.0], [69.4, 1116.0], [69.5, 1123.0], [69.6, 1123.0], [69.7, 1126.0], [69.8, 1126.0], [69.9, 1128.0], [70.0, 1128.0], [70.1, 1138.0], [70.2, 1138.0], [70.3, 1142.0], [70.4, 1142.0], [70.5, 1147.0], [70.6, 1147.0], [70.7, 1163.0], [70.8, 1163.0], [70.9, 1175.0], [71.0, 1175.0], [71.1, 1184.0], [71.2, 1184.0], [71.3, 1189.0], [71.4, 1189.0], [71.5, 1197.0], [71.6, 1197.0], [71.7, 1200.0], [71.8, 1200.0], [71.9, 1212.0], [72.0, 1212.0], [72.1, 1217.0], [72.2, 1217.0], [72.3, 1229.0], [72.4, 1229.0], [72.5, 1231.0], [72.6, 1231.0], [72.7, 1243.0], [72.8, 1243.0], [72.9, 1248.0], [73.0, 1248.0], [73.1, 1248.0], [73.2, 1248.0], [73.3, 1249.0], [73.4, 1249.0], [73.5, 1255.0], [73.6, 1255.0], [73.7, 1256.0], [73.8, 1256.0], [73.9, 1257.0], [74.0, 1257.0], [74.1, 1259.0], [74.2, 1259.0], [74.3, 1261.0], [74.4, 1261.0], [74.5, 1262.0], [74.6, 1262.0], [74.7, 1271.0], [74.8, 1271.0], [74.9, 1282.0], [75.0, 1282.0], [75.1, 1299.0], [75.2, 1299.0], [75.3, 1307.0], [75.4, 1307.0], [75.5, 1313.0], [75.6, 1313.0], [75.7, 1318.0], [75.8, 1318.0], [75.9, 1320.0], [76.0, 1320.0], [76.1, 1335.0], [76.2, 1335.0], [76.3, 1359.0], [76.4, 1359.0], [76.5, 1364.0], [76.6, 1364.0], [76.7, 1385.0], [76.8, 1385.0], [76.9, 1395.0], [77.0, 1395.0], [77.1, 1404.0], [77.2, 1404.0], [77.3, 1407.0], [77.4, 1407.0], [77.5, 1413.0], [77.6, 1413.0], [77.7, 1426.0], [77.8, 1426.0], [77.9, 1439.0], [78.0, 1439.0], [78.1, 1442.0], [78.2, 1442.0], [78.3, 1446.0], [78.4, 1446.0], [78.5, 1452.0], [78.6, 1452.0], [78.7, 1460.0], [78.8, 1460.0], [78.9, 1492.0], [79.0, 1492.0], [79.1, 1526.0], [79.2, 1526.0], [79.3, 1530.0], [79.4, 1530.0], [79.5, 1537.0], [79.6, 1537.0], [79.7, 1539.0], [79.8, 1539.0], [79.9, 1557.0], [80.0, 1557.0], [80.1, 1563.0], [80.2, 1563.0], [80.3, 1603.0], [80.4, 1603.0], [80.5, 1616.0], [80.6, 1616.0], [80.7, 1631.0], [80.8, 1631.0], [80.9, 1645.0], [81.0, 1645.0], [81.1, 1646.0], [81.2, 1646.0], [81.3, 1656.0], [81.4, 1656.0], [81.5, 1667.0], [81.6, 1667.0], [81.7, 1668.0], [81.8, 1668.0], [81.9, 1676.0], [82.0, 1676.0], [82.1, 1678.0], [82.2, 1678.0], [82.3, 1679.0], [82.4, 1679.0], [82.5, 1692.0], [82.6, 1692.0], [82.7, 1695.0], [82.8, 1695.0], [82.9, 1708.0], [83.0, 1708.0], [83.1, 1708.0], [83.2, 1708.0], [83.3, 1710.0], [83.4, 1710.0], [83.5, 1736.0], [83.6, 1736.0], [83.7, 1747.0], [83.8, 1747.0], [83.9, 1764.0], [84.0, 1764.0], [84.1, 1862.0], [84.2, 1862.0], [84.3, 1862.0], [84.4, 1862.0], [84.5, 1862.0], [84.6, 1862.0], [84.7, 1864.0], [84.8, 1864.0], [84.9, 1874.0], [85.0, 1874.0], [85.1, 1876.0], [85.2, 1876.0], [85.3, 1883.0], [85.4, 1883.0], [85.5, 2064.0], [85.6, 2064.0], [85.7, 2196.0], [85.8, 2196.0], [85.9, 2198.0], [86.0, 2198.0], [86.1, 2227.0], [86.2, 2227.0], [86.3, 2241.0], [86.4, 2241.0], [86.5, 2242.0], [86.6, 2242.0], [86.7, 2316.0], [86.8, 2316.0], [86.9, 2353.0], [87.0, 2353.0], [87.1, 2450.0], [87.2, 2450.0], [87.3, 3181.0], [87.4, 3181.0], [87.5, 3202.0], [87.6, 3202.0], [87.7, 3343.0], [87.8, 3343.0], [87.9, 3534.0], [88.0, 3534.0], [88.1, 3655.0], [88.2, 3655.0], [88.3, 4021.0], [88.4, 4021.0], [88.5, 4083.0], [88.6, 4083.0], [88.7, 4102.0], [88.8, 4102.0], [88.9, 4179.0], [89.0, 4179.0], [89.1, 4179.0], [89.2, 4179.0], [89.3, 4428.0], [89.4, 4428.0], [89.5, 4501.0], [89.6, 4501.0], [89.7, 4512.0], [89.8, 4512.0], [89.9, 4619.0], [90.0, 4619.0], [90.1, 4642.0], [90.2, 4642.0], [90.3, 4772.0], [90.4, 4772.0], [90.5, 4871.0], [90.6, 4871.0], [90.7, 4980.0], [90.8, 4980.0], [90.9, 5105.0], [91.0, 5105.0], [91.1, 5226.0], [91.2, 5226.0], [91.3, 5256.0], [91.4, 5256.0], [91.5, 5451.0], [91.6, 5451.0], [91.7, 5702.0], [91.8, 5702.0], [91.9, 5706.0], [92.0, 5706.0], [92.1, 5831.0], [92.2, 5831.0], [92.3, 5964.0], [92.4, 5964.0], [92.5, 6483.0], [92.6, 6483.0], [92.7, 6540.0], [92.8, 6540.0], [92.9, 6564.0], [93.0, 6564.0], [93.1, 6676.0], [93.2, 6676.0], [93.3, 6935.0], [93.4, 6935.0], [93.5, 6972.0], [93.6, 6972.0], [93.7, 10763.0], [93.8, 10763.0], [93.9, 10810.0], [94.0, 10810.0], [94.1, 10811.0], [94.2, 10811.0], [94.3, 10841.0], [94.4, 10841.0], [94.5, 10871.0], [94.6, 10871.0], [94.7, 10944.0], [94.8, 10944.0], [94.9, 10977.0], [95.0, 10977.0], [95.1, 11044.0], [95.2, 11044.0], [95.3, 11538.0], [95.4, 11538.0], [95.5, 11612.0], [95.6, 11612.0], [95.7, 12085.0], [95.8, 12085.0], [95.9, 12911.0], [96.0, 12911.0], [96.1, 13072.0], [96.2, 13072.0], [96.3, 13214.0], [96.4, 13214.0], [96.5, 13246.0], [96.6, 13246.0], [96.7, 13268.0], [96.8, 13268.0], [96.9, 13458.0], [97.0, 13458.0], [97.1, 13697.0], [97.2, 13697.0], [97.3, 13934.0], [97.4, 13934.0], [97.5, 20753.0], [97.6, 20753.0], [97.7, 20883.0], [97.8, 20883.0], [97.9, 20901.0], [98.0, 20901.0], [98.1, 22884.0], [98.2, 22884.0], [98.3, 22932.0], [98.4, 22932.0], [98.5, 23098.0], [98.6, 23098.0], [98.7, 32810.0], [98.8, 32810.0], [98.9, 33007.0], [99.0, 33007.0], [99.1, 42793.0], [99.2, 42793.0], [99.3, 52807.0], [99.4, 52807.0], [99.5, 62753.0], [99.6, 62753.0], [99.7, 72727.0], [99.8, 72727.0], [99.9, 83070.0], [100.0, 83070.0]], "isOverall": false, "label": "50User With10Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 93.0, "series": [{"data": [[600.0, 90.0], [700.0, 93.0], [800.0, 63.0], [900.0, 49.0], [1000.0, 35.0], [1100.0, 19.0], [1200.0, 18.0], [1300.0, 9.0], [1400.0, 10.0], [1500.0, 6.0], [1600.0, 13.0], [1700.0, 6.0], [1800.0, 7.0], [2000.0, 1.0], [2100.0, 2.0], [2300.0, 2.0], [2200.0, 3.0], [2400.0, 1.0], [3100.0, 1.0], [3300.0, 1.0], [3200.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [4000.0, 2.0], [4100.0, 3.0], [4500.0, 2.0], [4600.0, 2.0], [72700.0, 1.0], [4400.0, 1.0], [4800.0, 1.0], [4700.0, 1.0], [5100.0, 1.0], [4900.0, 1.0], [5200.0, 2.0], [5400.0, 1.0], [5700.0, 2.0], [5800.0, 1.0], [5900.0, 1.0], [6500.0, 2.0], [6400.0, 1.0], [6600.0, 1.0], [6900.0, 2.0], [10700.0, 1.0], [11000.0, 1.0], [10800.0, 4.0], [10900.0, 2.0], [11500.0, 1.0], [11600.0, 1.0], [12000.0, 1.0], [12900.0, 1.0], [13200.0, 3.0], [13000.0, 1.0], [13400.0, 1.0], [13600.0, 1.0], [13900.0, 1.0], [20900.0, 1.0], [20700.0, 1.0], [20800.0, 1.0], [22800.0, 1.0], [22900.0, 1.0], [23000.0, 1.0], [33000.0, 1.0], [32800.0, 1.0], [42700.0, 1.0], [52800.0, 1.0], [200.0, 1.0], [62700.0, 1.0], [83000.0, 1.0], [400.0, 4.0], [500.0, 4.0]], "isOverall": false, "label": "50User With10Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 83000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 388.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 388.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 104.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 8.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.59138816E12, "maxY": 50.0, "series": [{"data": [[1.59138966E12, 50.0], [1.5913887E12, 50.0], [1.5913896E12, 50.0], [1.5913893E12, 50.0], [1.59138834E12, 50.0], [1.59138876E12, 50.0], [1.59138942E12, 50.0], [1.5913884E12, 50.0], [1.59138906E12, 50.0], [1.59138948E12, 50.0], [1.59138852E12, 50.0], [1.59138822E12, 50.0], [1.59138816E12, 50.0], [1.59138912E12, 50.0], [1.59138978E12, 27.5], [1.59138924E12, 50.0], [1.59138894E12, 50.0], [1.59138984E12, 2.5], [1.59138888E12, 50.0], [1.59138858E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59138984E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 609.0, "minX": 1.0, "maxY": 10977.0, "series": [{"data": [[2.0, 720.0], [3.0, 757.0], [4.0, 773.0], [5.0, 742.0], [6.0, 920.0], [7.0, 922.0], [8.0, 854.0], [9.0, 694.0], [10.0, 10977.0], [11.0, 765.0], [12.0, 795.0], [13.0, 797.0], [14.0, 769.0], [15.0, 827.0], [16.0, 10841.0], [17.0, 920.0], [18.0, 987.0], [19.0, 1008.0], [20.0, 1024.0], [21.0, 921.0], [22.0, 825.0], [23.0, 778.0], [24.0, 1004.0], [25.0, 753.0], [26.0, 1072.0], [27.0, 1089.0], [28.0, 1175.0], [29.0, 1261.0], [30.0, 1184.0], [31.0, 1243.0], [33.0, 1023.0], [32.0, 1413.0], [35.0, 966.0], [34.0, 915.0], [37.0, 771.0], [36.0, 969.0], [39.0, 1114.0], [38.0, 1100.0], [41.0, 1006.0], [40.0, 1061.0], [43.0, 609.0], [42.0, 748.0], [45.0, 964.0], [44.0, 971.0], [47.0, 885.0], [46.0, 1116.0], [49.0, 959.0], [48.0, 1084.0], [50.0, 2763.6962305986713], [1.0, 744.0]], "isOverall": false, "label": "50User With10Request", "isController": false}, {"data": [[47.55, 2624.4840000000004]], "isOverall": false, "label": "50User With10Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 245.56666666666666, "minX": 1.59138816E12, "maxY": 7230.416666666667, "series": [{"data": [[1.59138966E12, 245.61666666666667], [1.5913887E12, 3949.133333333333], [1.5913896E12, 3793.7833333333333], [1.5913893E12, 246.38333333333333], [1.59138834E12, 3867.5666666666666], [1.59138876E12, 245.56666666666666], [1.59138942E12, 3829.0333333333333], [1.5913884E12, 246.18333333333334], [1.59138906E12, 3783.133333333333], [1.59138948E12, 246.16666666666666], [1.59138852E12, 3986.233333333333], [1.59138822E12, 528.85], [1.59138816E12, 5742.75], [1.59138912E12, 246.16666666666666], [1.59138978E12, 3863.383333333333], [1.59138924E12, 3911.9666666666667], [1.59138894E12, 245.63333333333333], [1.59138984E12, 328.48333333333335], [1.59138888E12, 3922.85], [1.59138858E12, 246.38333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59138966E12, 460.8666666666667], [1.5913887E12, 7223.666666666667], [1.5913896E12, 7225.95], [1.5913893E12, 461.6666666666667], [1.59138834E12, 7222.533333333334], [1.59138876E12, 460.8333333333333], [1.59138942E12, 7221.933333333333], [1.5913884E12, 461.43333333333334], [1.59138906E12, 7224.0], [1.59138948E12, 461.43333333333334], [1.59138852E12, 7230.283333333334], [1.59138822E12, 461.4], [1.59138816E12, 7225.483333333334], [1.59138912E12, 461.43333333333334], [1.59138978E12, 7072.983333333334], [1.59138924E12, 7230.416666666667], [1.59138894E12, 460.8666666666667], [1.59138984E12, 615.5166666666667], [1.59138888E12, 7228.15], [1.59138858E12, 461.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59138984E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 654.0, "minX": 1.59138816E12, "maxY": 72850.0, "series": [{"data": [[1.59138966E12, 719.3333333333334], [1.5913887E12, 1001.2553191489363], [1.5913896E12, 1086.2765957446807], [1.5913893E12, 684.3333333333334], [1.59138834E12, 3135.40425531915], [1.59138876E12, 895.0], [1.59138942E12, 1811.3617021276596], [1.5913884E12, 654.0], [1.59138906E12, 1075.8297872340427], [1.59138948E12, 746.6666666666666], [1.59138852E12, 1059.1276595744675], [1.59138822E12, 72850.0], [1.59138816E12, 10183.82978723404], [1.59138912E12, 688.0], [1.59138978E12, 1380.2391304347823], [1.59138924E12, 859.2553191489365], [1.59138894E12, 906.6666666666666], [1.59138984E12, 748.5], [1.59138888E12, 1262.7446808510635], [1.59138858E12, 665.3333333333334]], "isOverall": false, "label": "50User With10Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59138984E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 654.0, "minX": 1.59138816E12, "maxY": 72849.0, "series": [{"data": [[1.59138966E12, 719.0], [1.5913887E12, 1001.2553191489363], [1.5913896E12, 1086.191489361702], [1.5913893E12, 684.3333333333334], [1.59138834E12, 3135.3191489361707], [1.59138876E12, 895.0], [1.59138942E12, 1811.31914893617], [1.5913884E12, 654.0], [1.59138906E12, 1075.787234042553], [1.59138948E12, 746.6666666666666], [1.59138852E12, 1059.0638297872342], [1.59138822E12, 72849.0], [1.59138816E12, 10183.468085106382], [1.59138912E12, 688.0], [1.59138978E12, 1380.1956521739132], [1.59138924E12, 859.1702127659572], [1.59138894E12, 906.6666666666666], [1.59138984E12, 748.25], [1.59138888E12, 1262.6808510638298], [1.59138858E12, 665.3333333333334]], "isOverall": false, "label": "50User With10Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59138984E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.59138816E12, "maxY": 42.333333333333336, "series": [{"data": [[1.59138966E12, 14.0], [1.5913887E12, 14.51063829787234], [1.5913896E12, 14.29787234042553], [1.5913893E12, 14.0], [1.59138834E12, 15.148936170212767], [1.59138876E12, 14.0], [1.59138942E12, 14.510638297872338], [1.5913884E12, 14.333333333333334], [1.59138906E12, 15.808510638297873], [1.59138948E12, 42.333333333333336], [1.59138852E12, 14.872340425531915], [1.59138822E12, 19.0], [1.59138816E12, 16.12765957446808], [1.59138912E12, 15.0], [1.59138978E12, 17.15217391304348], [1.59138924E12, 14.25531914893617], [1.59138894E12, 15.0], [1.59138984E12, 14.25], [1.59138888E12, 14.53191489361702], [1.59138858E12, 26.333333333333336]], "isOverall": false, "label": "50User With10Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59138984E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 562.0, "minX": 1.59138816E12, "maxY": 83070.0, "series": [{"data": [[1.59138966E12, 772.0], [1.5913887E12, 1708.0], [1.5913896E12, 10944.0], [1.5913893E12, 718.0], [1.59138834E12, 20901.0], [1.59138876E12, 1395.0], [1.59138942E12, 11612.0], [1.5913884E12, 692.0], [1.59138906E12, 10810.0], [1.59138948E12, 857.0], [1.59138852E12, 1876.0], [1.59138822E12, 83070.0], [1.59138816E12, 52807.0], [1.59138912E12, 753.0], [1.59138978E12, 10977.0], [1.59138924E12, 1460.0], [1.59138894E12, 1385.0], [1.59138984E12, 773.0], [1.59138888E12, 10871.0], [1.59138858E12, 705.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59138966E12, 673.0], [1.5913887E12, 627.0], [1.5913896E12, 575.0], [1.5913893E12, 664.0], [1.59138834E12, 610.0], [1.59138876E12, 630.0], [1.59138942E12, 607.0], [1.5913884E12, 612.0], [1.59138906E12, 617.0], [1.59138948E12, 668.0], [1.59138852E12, 609.0], [1.59138822E12, 62753.0], [1.59138816E12, 632.0], [1.59138912E12, 654.0], [1.59138978E12, 609.0], [1.59138924E12, 613.0], [1.59138894E12, 664.0], [1.59138984E12, 720.0], [1.59138888E12, 562.0], [1.59138858E12, 622.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59138966E12, 772.0], [1.5913887E12, 1660.4], [1.5913896E12, 1263.8], [1.5913893E12, 718.0], [1.59138834E12, 11241.599999999999], [1.59138876E12, 1395.0], [1.59138942E12, 4554.8], [1.5913884E12, 692.0], [1.59138906E12, 1414.6], [1.59138948E12, 857.0], [1.59138852E12, 1708.4], [1.59138822E12, 83070.0], [1.59138816E12, 25040.400000000027], [1.59138912E12, 753.0], [1.59138978E12, 1248.4], [1.59138924E12, 1269.4], [1.59138894E12, 1385.0], [1.59138984E12, 773.0], [1.59138888E12, 1459.6000000000015], [1.59138858E12, 705.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59138966E12, 772.0], [1.5913887E12, 1708.0], [1.5913896E12, 10944.0], [1.5913893E12, 718.0], [1.59138834E12, 20901.0], [1.59138876E12, 1395.0], [1.59138942E12, 11612.0], [1.5913884E12, 692.0], [1.59138906E12, 10810.0], [1.59138948E12, 857.0], [1.59138852E12, 1876.0], [1.59138822E12, 83070.0], [1.59138816E12, 52807.0], [1.59138912E12, 753.0], [1.59138978E12, 10977.0], [1.59138924E12, 1460.0], [1.59138894E12, 1385.0], [1.59138984E12, 773.0], [1.59138888E12, 10871.0], [1.59138858E12, 705.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59138966E12, 772.0], [1.5913887E12, 1686.8], [1.5913896E12, 1319.4], [1.5913893E12, 718.0], [1.59138834E12, 20844.0], [1.59138876E12, 1395.0], [1.59138942E12, 5488.199999999997], [1.5913884E12, 692.0], [1.59138906E12, 1533.7], [1.59138948E12, 857.0], [1.59138852E12, 1757.1999999999998], [1.59138822E12, 83070.0], [1.59138816E12, 38878.59999999995], [1.59138912E12, 753.0], [1.59138978E12, 7541.199999999986], [1.59138924E12, 1390.3999999999992], [1.59138894E12, 1385.0], [1.59138984E12, 773.0], [1.59138888E12, 7384.199999999952], [1.59138858E12, 705.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59138984E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 351.0, "minX": 1.0, "maxY": 6620.0, "series": [{"data": [[2.0, 815.0], [4.0, 1025.0], [1.0, 718.0], [5.0, 1229.0], [6.0, 6620.0], [3.0, 867.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 559.0], [1.0, 417.0], [5.0, 351.0], [3.0, 482.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 351.0, "minX": 1.0, "maxY": 6620.0, "series": [{"data": [[2.0, 815.0], [4.0, 1025.0], [1.0, 718.0], [5.0, 1229.0], [6.0, 6620.0], [3.0, 867.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 559.0], [1.0, 417.0], [5.0, 351.0], [3.0, 482.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.59138816E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.59138966E12, 0.05], [1.5913887E12, 0.7833333333333333], [1.5913896E12, 0.7833333333333333], [1.5913893E12, 0.05], [1.59138834E12, 0.7833333333333333], [1.59138876E12, 0.05], [1.59138942E12, 0.7833333333333333], [1.5913884E12, 0.05], [1.59138906E12, 0.7833333333333333], [1.59138948E12, 0.05], [1.59138852E12, 0.7833333333333333], [1.59138816E12, 0.8333333333333334], [1.59138912E12, 0.05], [1.59138978E12, 0.7833333333333333], [1.59138924E12, 0.7833333333333333], [1.59138894E12, 0.05], [1.59138984E12, 0.05], [1.59138888E12, 0.7833333333333333], [1.59138858E12, 0.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59138984E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.59138816E12, "maxY": 0.7833333333333333, "series": [{"data": [[1.59138966E12, 0.05], [1.5913887E12, 0.7833333333333333], [1.5913896E12, 0.75], [1.5913893E12, 0.05], [1.59138834E12, 0.75], [1.59138876E12, 0.05], [1.59138942E12, 0.75], [1.5913884E12, 0.05], [1.59138906E12, 0.75], [1.59138948E12, 0.05], [1.59138852E12, 0.7833333333333333], [1.59138822E12, 0.05], [1.59138816E12, 0.7833333333333333], [1.59138912E12, 0.05], [1.59138978E12, 0.7666666666666667], [1.59138924E12, 0.7833333333333333], [1.59138894E12, 0.05], [1.59138984E12, 0.06666666666666667], [1.59138888E12, 0.7833333333333333], [1.59138858E12, 0.05]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.59138834E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.5913896E12, 0.03333333333333333], [1.59138834E12, 0.016666666666666666], [1.59138942E12, 0.03333333333333333], [1.59138906E12, 0.03333333333333333]], "isOverall": false, "label": "409", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59138984E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.59138816E12, "maxY": 0.7833333333333333, "series": [{"data": [[1.5913896E12, 0.03333333333333333], [1.59138834E12, 0.03333333333333333], [1.59138942E12, 0.03333333333333333], [1.59138906E12, 0.03333333333333333]], "isOverall": false, "label": "50User With10Request-failure", "isController": false}, {"data": [[1.59138966E12, 0.05], [1.5913887E12, 0.7833333333333333], [1.5913896E12, 0.75], [1.5913893E12, 0.05], [1.59138834E12, 0.75], [1.59138876E12, 0.05], [1.59138942E12, 0.75], [1.5913884E12, 0.05], [1.59138906E12, 0.75], [1.59138948E12, 0.05], [1.59138852E12, 0.7833333333333333], [1.59138822E12, 0.05], [1.59138816E12, 0.7833333333333333], [1.59138912E12, 0.05], [1.59138978E12, 0.7666666666666667], [1.59138924E12, 0.7833333333333333], [1.59138894E12, 0.05], [1.59138984E12, 0.06666666666666667], [1.59138888E12, 0.7833333333333333], [1.59138858E12, 0.05]], "isOverall": false, "label": "50User With10Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59138984E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.59138816E12, "maxY": 0.7833333333333333, "series": [{"data": [[1.59138966E12, 0.05], [1.5913887E12, 0.7833333333333333], [1.5913896E12, 0.75], [1.5913893E12, 0.05], [1.59138834E12, 0.75], [1.59138876E12, 0.05], [1.59138942E12, 0.75], [1.5913884E12, 0.05], [1.59138906E12, 0.75], [1.59138948E12, 0.05], [1.59138852E12, 0.7833333333333333], [1.59138822E12, 0.05], [1.59138816E12, 0.7833333333333333], [1.59138912E12, 0.05], [1.59138978E12, 0.7666666666666667], [1.59138924E12, 0.7833333333333333], [1.59138894E12, 0.05], [1.59138984E12, 0.06666666666666667], [1.59138888E12, 0.7833333333333333], [1.59138858E12, 0.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.5913896E12, 0.03333333333333333], [1.59138834E12, 0.03333333333333333], [1.59138942E12, 0.03333333333333333], [1.59138906E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59138984E12, "title": "Total Transactions Per Second"}},
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

