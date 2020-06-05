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
        data: {"result": {"minY": 312.0, "minX": 0.0, "maxY": 11566.0, "series": [{"data": [[0.0, 312.0], [0.1, 312.0], [0.2, 312.0], [0.3, 312.0], [0.4, 312.0], [0.5, 358.0], [0.6, 358.0], [0.7, 358.0], [0.8, 358.0], [0.9, 358.0], [1.0, 384.0], [1.1, 384.0], [1.2, 384.0], [1.3, 384.0], [1.4, 384.0], [1.5, 384.0], [1.6, 384.0], [1.7, 384.0], [1.8, 384.0], [1.9, 384.0], [2.0, 396.0], [2.1, 396.0], [2.2, 396.0], [2.3, 396.0], [2.4, 396.0], [2.5, 561.0], [2.6, 561.0], [2.7, 561.0], [2.8, 561.0], [2.9, 561.0], [3.0, 561.0], [3.1, 561.0], [3.2, 561.0], [3.3, 561.0], [3.4, 561.0], [3.5, 565.0], [3.6, 565.0], [3.7, 565.0], [3.8, 565.0], [3.9, 565.0], [4.0, 567.0], [4.1, 567.0], [4.2, 567.0], [4.3, 567.0], [4.4, 567.0], [4.5, 572.0], [4.6, 572.0], [4.7, 572.0], [4.8, 572.0], [4.9, 572.0], [5.0, 577.0], [5.1, 577.0], [5.2, 577.0], [5.3, 577.0], [5.4, 577.0], [5.5, 595.0], [5.6, 595.0], [5.7, 595.0], [5.8, 595.0], [5.9, 595.0], [6.0, 598.0], [6.1, 598.0], [6.2, 598.0], [6.3, 598.0], [6.4, 598.0], [6.5, 600.0], [6.6, 600.0], [6.7, 600.0], [6.8, 600.0], [6.9, 600.0], [7.0, 602.0], [7.1, 602.0], [7.2, 602.0], [7.3, 602.0], [7.4, 602.0], [7.5, 607.0], [7.6, 607.0], [7.7, 607.0], [7.8, 607.0], [7.9, 607.0], [8.0, 607.0], [8.1, 607.0], [8.2, 607.0], [8.3, 607.0], [8.4, 607.0], [8.5, 607.0], [8.6, 607.0], [8.7, 607.0], [8.8, 607.0], [8.9, 607.0], [9.0, 608.0], [9.1, 608.0], [9.2, 608.0], [9.3, 608.0], [9.4, 608.0], [9.5, 608.0], [9.6, 608.0], [9.7, 608.0], [9.8, 608.0], [9.9, 608.0], [10.0, 608.0], [10.1, 608.0], [10.2, 608.0], [10.3, 608.0], [10.4, 608.0], [10.5, 608.0], [10.6, 608.0], [10.7, 608.0], [10.8, 608.0], [10.9, 608.0], [11.0, 609.0], [11.1, 609.0], [11.2, 609.0], [11.3, 609.0], [11.4, 609.0], [11.5, 609.0], [11.6, 609.0], [11.7, 609.0], [11.8, 609.0], [11.9, 609.0], [12.0, 611.0], [12.1, 611.0], [12.2, 611.0], [12.3, 611.0], [12.4, 611.0], [12.5, 611.0], [12.6, 611.0], [12.7, 611.0], [12.8, 611.0], [12.9, 611.0], [13.0, 614.0], [13.1, 614.0], [13.2, 614.0], [13.3, 614.0], [13.4, 614.0], [13.5, 616.0], [13.6, 616.0], [13.7, 616.0], [13.8, 616.0], [13.9, 616.0], [14.0, 616.0], [14.1, 616.0], [14.2, 616.0], [14.3, 616.0], [14.4, 616.0], [14.5, 617.0], [14.6, 617.0], [14.7, 617.0], [14.8, 617.0], [14.9, 617.0], [15.0, 617.0], [15.1, 617.0], [15.2, 617.0], [15.3, 617.0], [15.4, 617.0], [15.5, 617.0], [15.6, 617.0], [15.7, 617.0], [15.8, 617.0], [15.9, 617.0], [16.0, 618.0], [16.1, 618.0], [16.2, 618.0], [16.3, 618.0], [16.4, 618.0], [16.5, 618.0], [16.6, 618.0], [16.7, 618.0], [16.8, 618.0], [16.9, 618.0], [17.0, 618.0], [17.1, 618.0], [17.2, 618.0], [17.3, 618.0], [17.4, 618.0], [17.5, 622.0], [17.6, 622.0], [17.7, 622.0], [17.8, 622.0], [17.9, 622.0], [18.0, 622.0], [18.1, 622.0], [18.2, 622.0], [18.3, 622.0], [18.4, 622.0], [18.5, 624.0], [18.6, 624.0], [18.7, 624.0], [18.8, 624.0], [18.9, 624.0], [19.0, 625.0], [19.1, 625.0], [19.2, 625.0], [19.3, 625.0], [19.4, 625.0], [19.5, 626.0], [19.6, 626.0], [19.7, 626.0], [19.8, 626.0], [19.9, 626.0], [20.0, 630.0], [20.1, 630.0], [20.2, 630.0], [20.3, 630.0], [20.4, 630.0], [20.5, 630.0], [20.6, 630.0], [20.7, 630.0], [20.8, 630.0], [20.9, 630.0], [21.0, 636.0], [21.1, 636.0], [21.2, 636.0], [21.3, 636.0], [21.4, 636.0], [21.5, 637.0], [21.6, 637.0], [21.7, 637.0], [21.8, 637.0], [21.9, 637.0], [22.0, 644.0], [22.1, 644.0], [22.2, 644.0], [22.3, 644.0], [22.4, 644.0], [22.5, 645.0], [22.6, 645.0], [22.7, 645.0], [22.8, 645.0], [22.9, 645.0], [23.0, 645.0], [23.1, 645.0], [23.2, 645.0], [23.3, 645.0], [23.4, 645.0], [23.5, 647.0], [23.6, 647.0], [23.7, 647.0], [23.8, 647.0], [23.9, 647.0], [24.0, 651.0], [24.1, 651.0], [24.2, 651.0], [24.3, 651.0], [24.4, 651.0], [24.5, 653.0], [24.6, 653.0], [24.7, 653.0], [24.8, 653.0], [24.9, 653.0], [25.0, 654.0], [25.1, 654.0], [25.2, 654.0], [25.3, 654.0], [25.4, 654.0], [25.5, 655.0], [25.6, 655.0], [25.7, 655.0], [25.8, 655.0], [25.9, 655.0], [26.0, 657.0], [26.1, 657.0], [26.2, 657.0], [26.3, 657.0], [26.4, 657.0], [26.5, 657.0], [26.6, 657.0], [26.7, 657.0], [26.8, 657.0], [26.9, 657.0], [27.0, 659.0], [27.1, 659.0], [27.2, 659.0], [27.3, 659.0], [27.4, 659.0], [27.5, 661.0], [27.6, 661.0], [27.7, 661.0], [27.8, 661.0], [27.9, 661.0], [28.0, 661.0], [28.1, 661.0], [28.2, 661.0], [28.3, 661.0], [28.4, 661.0], [28.5, 661.0], [28.6, 661.0], [28.7, 661.0], [28.8, 661.0], [28.9, 661.0], [29.0, 663.0], [29.1, 663.0], [29.2, 663.0], [29.3, 663.0], [29.4, 663.0], [29.5, 663.0], [29.6, 663.0], [29.7, 663.0], [29.8, 663.0], [29.9, 663.0], [30.0, 664.0], [30.1, 664.0], [30.2, 664.0], [30.3, 664.0], [30.4, 664.0], [30.5, 664.0], [30.6, 664.0], [30.7, 664.0], [30.8, 664.0], [30.9, 664.0], [31.0, 665.0], [31.1, 665.0], [31.2, 665.0], [31.3, 665.0], [31.4, 665.0], [31.5, 666.0], [31.6, 666.0], [31.7, 666.0], [31.8, 666.0], [31.9, 666.0], [32.0, 669.0], [32.1, 669.0], [32.2, 669.0], [32.3, 669.0], [32.4, 669.0], [32.5, 669.0], [32.6, 669.0], [32.7, 669.0], [32.8, 669.0], [32.9, 669.0], [33.0, 669.0], [33.1, 669.0], [33.2, 669.0], [33.3, 669.0], [33.4, 669.0], [33.5, 670.0], [33.6, 670.0], [33.7, 670.0], [33.8, 670.0], [33.9, 670.0], [34.0, 670.0], [34.1, 670.0], [34.2, 670.0], [34.3, 670.0], [34.4, 670.0], [34.5, 671.0], [34.6, 671.0], [34.7, 671.0], [34.8, 671.0], [34.9, 671.0], [35.0, 671.0], [35.1, 671.0], [35.2, 671.0], [35.3, 671.0], [35.4, 671.0], [35.5, 671.0], [35.6, 671.0], [35.7, 671.0], [35.8, 671.0], [35.9, 671.0], [36.0, 672.0], [36.1, 672.0], [36.2, 672.0], [36.3, 672.0], [36.4, 672.0], [36.5, 672.0], [36.6, 672.0], [36.7, 672.0], [36.8, 672.0], [36.9, 672.0], [37.0, 672.0], [37.1, 672.0], [37.2, 672.0], [37.3, 672.0], [37.4, 672.0], [37.5, 673.0], [37.6, 673.0], [37.7, 673.0], [37.8, 673.0], [37.9, 673.0], [38.0, 674.0], [38.1, 674.0], [38.2, 674.0], [38.3, 674.0], [38.4, 674.0], [38.5, 674.0], [38.6, 674.0], [38.7, 674.0], [38.8, 674.0], [38.9, 674.0], [39.0, 674.0], [39.1, 674.0], [39.2, 674.0], [39.3, 674.0], [39.4, 674.0], [39.5, 674.0], [39.6, 674.0], [39.7, 674.0], [39.8, 674.0], [39.9, 674.0], [40.0, 675.0], [40.1, 675.0], [40.2, 675.0], [40.3, 675.0], [40.4, 675.0], [40.5, 675.0], [40.6, 675.0], [40.7, 675.0], [40.8, 675.0], [40.9, 675.0], [41.0, 677.0], [41.1, 677.0], [41.2, 677.0], [41.3, 677.0], [41.4, 677.0], [41.5, 678.0], [41.6, 678.0], [41.7, 678.0], [41.8, 678.0], [41.9, 678.0], [42.0, 681.0], [42.1, 681.0], [42.2, 681.0], [42.3, 681.0], [42.4, 681.0], [42.5, 682.0], [42.6, 682.0], [42.7, 682.0], [42.8, 682.0], [42.9, 682.0], [43.0, 682.0], [43.1, 682.0], [43.2, 682.0], [43.3, 682.0], [43.4, 682.0], [43.5, 686.0], [43.6, 686.0], [43.7, 686.0], [43.8, 686.0], [43.9, 686.0], [44.0, 689.0], [44.1, 689.0], [44.2, 689.0], [44.3, 689.0], [44.4, 689.0], [44.5, 690.0], [44.6, 690.0], [44.7, 690.0], [44.8, 690.0], [44.9, 690.0], [45.0, 691.0], [45.1, 691.0], [45.2, 691.0], [45.3, 691.0], [45.4, 691.0], [45.5, 691.0], [45.6, 691.0], [45.7, 691.0], [45.8, 691.0], [45.9, 691.0], [46.0, 693.0], [46.1, 693.0], [46.2, 693.0], [46.3, 693.0], [46.4, 693.0], [46.5, 694.0], [46.6, 694.0], [46.7, 694.0], [46.8, 694.0], [46.9, 694.0], [47.0, 694.0], [47.1, 694.0], [47.2, 694.0], [47.3, 694.0], [47.4, 694.0], [47.5, 696.0], [47.6, 696.0], [47.7, 696.0], [47.8, 696.0], [47.9, 696.0], [48.0, 697.0], [48.1, 697.0], [48.2, 697.0], [48.3, 697.0], [48.4, 697.0], [48.5, 698.0], [48.6, 698.0], [48.7, 698.0], [48.8, 698.0], [48.9, 698.0], [49.0, 699.0], [49.1, 699.0], [49.2, 699.0], [49.3, 699.0], [49.4, 699.0], [49.5, 699.0], [49.6, 699.0], [49.7, 699.0], [49.8, 699.0], [49.9, 699.0], [50.0, 700.0], [50.1, 700.0], [50.2, 700.0], [50.3, 700.0], [50.4, 700.0], [50.5, 702.0], [50.6, 702.0], [50.7, 702.0], [50.8, 702.0], [50.9, 702.0], [51.0, 702.0], [51.1, 702.0], [51.2, 702.0], [51.3, 702.0], [51.4, 702.0], [51.5, 703.0], [51.6, 703.0], [51.7, 703.0], [51.8, 703.0], [51.9, 703.0], [52.0, 703.0], [52.1, 703.0], [52.2, 703.0], [52.3, 703.0], [52.4, 703.0], [52.5, 704.0], [52.6, 704.0], [52.7, 704.0], [52.8, 704.0], [52.9, 704.0], [53.0, 704.0], [53.1, 704.0], [53.2, 704.0], [53.3, 704.0], [53.4, 704.0], [53.5, 706.0], [53.6, 706.0], [53.7, 706.0], [53.8, 706.0], [53.9, 706.0], [54.0, 706.0], [54.1, 706.0], [54.2, 706.0], [54.3, 706.0], [54.4, 706.0], [54.5, 706.0], [54.6, 706.0], [54.7, 706.0], [54.8, 706.0], [54.9, 706.0], [55.0, 708.0], [55.1, 708.0], [55.2, 708.0], [55.3, 708.0], [55.4, 708.0], [55.5, 708.0], [55.6, 708.0], [55.7, 708.0], [55.8, 708.0], [55.9, 708.0], [56.0, 711.0], [56.1, 711.0], [56.2, 711.0], [56.3, 711.0], [56.4, 711.0], [56.5, 713.0], [56.6, 713.0], [56.7, 713.0], [56.8, 713.0], [56.9, 713.0], [57.0, 715.0], [57.1, 715.0], [57.2, 715.0], [57.3, 715.0], [57.4, 715.0], [57.5, 715.0], [57.6, 715.0], [57.7, 715.0], [57.8, 715.0], [57.9, 715.0], [58.0, 716.0], [58.1, 716.0], [58.2, 716.0], [58.3, 716.0], [58.4, 716.0], [58.5, 717.0], [58.6, 717.0], [58.7, 717.0], [58.8, 717.0], [58.9, 717.0], [59.0, 717.0], [59.1, 717.0], [59.2, 717.0], [59.3, 717.0], [59.4, 717.0], [59.5, 718.0], [59.6, 718.0], [59.7, 718.0], [59.8, 718.0], [59.9, 718.0], [60.0, 719.0], [60.1, 719.0], [60.2, 719.0], [60.3, 719.0], [60.4, 719.0], [60.5, 720.0], [60.6, 720.0], [60.7, 720.0], [60.8, 720.0], [60.9, 720.0], [61.0, 720.0], [61.1, 720.0], [61.2, 720.0], [61.3, 720.0], [61.4, 720.0], [61.5, 723.0], [61.6, 723.0], [61.7, 723.0], [61.8, 723.0], [61.9, 723.0], [62.0, 724.0], [62.1, 724.0], [62.2, 724.0], [62.3, 724.0], [62.4, 724.0], [62.5, 725.0], [62.6, 725.0], [62.7, 725.0], [62.8, 725.0], [62.9, 725.0], [63.0, 727.0], [63.1, 727.0], [63.2, 727.0], [63.3, 727.0], [63.4, 727.0], [63.5, 727.0], [63.6, 727.0], [63.7, 727.0], [63.8, 727.0], [63.9, 727.0], [64.0, 733.0], [64.1, 733.0], [64.2, 733.0], [64.3, 733.0], [64.4, 733.0], [64.5, 734.0], [64.6, 734.0], [64.7, 734.0], [64.8, 734.0], [64.9, 734.0], [65.0, 736.0], [65.1, 736.0], [65.2, 736.0], [65.3, 736.0], [65.4, 736.0], [65.5, 737.0], [65.6, 737.0], [65.7, 737.0], [65.8, 737.0], [65.9, 737.0], [66.0, 743.0], [66.1, 743.0], [66.2, 743.0], [66.3, 743.0], [66.4, 743.0], [66.5, 745.0], [66.6, 745.0], [66.7, 745.0], [66.8, 745.0], [66.9, 745.0], [67.0, 747.0], [67.1, 747.0], [67.2, 747.0], [67.3, 747.0], [67.4, 747.0], [67.5, 748.0], [67.6, 748.0], [67.7, 748.0], [67.8, 748.0], [67.9, 748.0], [68.0, 749.0], [68.1, 749.0], [68.2, 749.0], [68.3, 749.0], [68.4, 749.0], [68.5, 752.0], [68.6, 752.0], [68.7, 752.0], [68.8, 752.0], [68.9, 752.0], [69.0, 757.0], [69.1, 757.0], [69.2, 757.0], [69.3, 757.0], [69.4, 757.0], [69.5, 757.0], [69.6, 757.0], [69.7, 757.0], [69.8, 757.0], [69.9, 757.0], [70.0, 758.0], [70.1, 758.0], [70.2, 758.0], [70.3, 758.0], [70.4, 758.0], [70.5, 758.0], [70.6, 758.0], [70.7, 758.0], [70.8, 758.0], [70.9, 758.0], [71.0, 759.0], [71.1, 759.0], [71.2, 759.0], [71.3, 759.0], [71.4, 759.0], [71.5, 759.0], [71.6, 759.0], [71.7, 759.0], [71.8, 759.0], [71.9, 759.0], [72.0, 761.0], [72.1, 761.0], [72.2, 761.0], [72.3, 761.0], [72.4, 761.0], [72.5, 762.0], [72.6, 762.0], [72.7, 762.0], [72.8, 762.0], [72.9, 762.0], [73.0, 765.0], [73.1, 765.0], [73.2, 765.0], [73.3, 765.0], [73.4, 765.0], [73.5, 765.0], [73.6, 765.0], [73.7, 765.0], [73.8, 765.0], [73.9, 765.0], [74.0, 766.0], [74.1, 766.0], [74.2, 766.0], [74.3, 766.0], [74.4, 766.0], [74.5, 766.0], [74.6, 766.0], [74.7, 766.0], [74.8, 766.0], [74.9, 766.0], [75.0, 767.0], [75.1, 767.0], [75.2, 767.0], [75.3, 767.0], [75.4, 767.0], [75.5, 770.0], [75.6, 770.0], [75.7, 770.0], [75.8, 770.0], [75.9, 770.0], [76.0, 771.0], [76.1, 771.0], [76.2, 771.0], [76.3, 771.0], [76.4, 771.0], [76.5, 775.0], [76.6, 775.0], [76.7, 775.0], [76.8, 775.0], [76.9, 775.0], [77.0, 778.0], [77.1, 778.0], [77.2, 778.0], [77.3, 778.0], [77.4, 778.0], [77.5, 785.0], [77.6, 785.0], [77.7, 785.0], [77.8, 785.0], [77.9, 785.0], [78.0, 792.0], [78.1, 792.0], [78.2, 792.0], [78.3, 792.0], [78.4, 792.0], [78.5, 792.0], [78.6, 792.0], [78.7, 792.0], [78.8, 792.0], [78.9, 792.0], [79.0, 793.0], [79.1, 793.0], [79.2, 793.0], [79.3, 793.0], [79.4, 793.0], [79.5, 797.0], [79.6, 797.0], [79.7, 797.0], [79.8, 797.0], [79.9, 797.0], [80.0, 798.0], [80.1, 798.0], [80.2, 798.0], [80.3, 798.0], [80.4, 798.0], [80.5, 800.0], [80.6, 800.0], [80.7, 800.0], [80.8, 800.0], [80.9, 800.0], [81.0, 801.0], [81.1, 801.0], [81.2, 801.0], [81.3, 801.0], [81.4, 801.0], [81.5, 802.0], [81.6, 802.0], [81.7, 802.0], [81.8, 802.0], [81.9, 802.0], [82.0, 805.0], [82.1, 805.0], [82.2, 805.0], [82.3, 805.0], [82.4, 805.0], [82.5, 807.0], [82.6, 807.0], [82.7, 807.0], [82.8, 807.0], [82.9, 807.0], [83.0, 808.0], [83.1, 808.0], [83.2, 808.0], [83.3, 808.0], [83.4, 808.0], [83.5, 810.0], [83.6, 810.0], [83.7, 810.0], [83.8, 810.0], [83.9, 810.0], [84.0, 810.0], [84.1, 810.0], [84.2, 810.0], [84.3, 810.0], [84.4, 810.0], [84.5, 811.0], [84.6, 811.0], [84.7, 811.0], [84.8, 811.0], [84.9, 811.0], [85.0, 811.0], [85.1, 811.0], [85.2, 811.0], [85.3, 811.0], [85.4, 811.0], [85.5, 813.0], [85.6, 813.0], [85.7, 813.0], [85.8, 813.0], [85.9, 813.0], [86.0, 817.0], [86.1, 817.0], [86.2, 817.0], [86.3, 817.0], [86.4, 817.0], [86.5, 817.0], [86.6, 817.0], [86.7, 817.0], [86.8, 817.0], [86.9, 817.0], [87.0, 820.0], [87.1, 820.0], [87.2, 820.0], [87.3, 820.0], [87.4, 820.0], [87.5, 822.0], [87.6, 822.0], [87.7, 822.0], [87.8, 822.0], [87.9, 822.0], [88.0, 827.0], [88.1, 827.0], [88.2, 827.0], [88.3, 827.0], [88.4, 827.0], [88.5, 828.0], [88.6, 828.0], [88.7, 828.0], [88.8, 828.0], [88.9, 828.0], [89.0, 834.0], [89.1, 834.0], [89.2, 834.0], [89.3, 834.0], [89.4, 834.0], [89.5, 843.0], [89.6, 843.0], [89.7, 843.0], [89.8, 843.0], [89.9, 843.0], [90.0, 846.0], [90.1, 846.0], [90.2, 846.0], [90.3, 846.0], [90.4, 846.0], [90.5, 856.0], [90.6, 856.0], [90.7, 856.0], [90.8, 856.0], [90.9, 856.0], [91.0, 857.0], [91.1, 857.0], [91.2, 857.0], [91.3, 857.0], [91.4, 857.0], [91.5, 858.0], [91.6, 858.0], [91.7, 858.0], [91.8, 858.0], [91.9, 858.0], [92.0, 863.0], [92.1, 863.0], [92.2, 863.0], [92.3, 863.0], [92.4, 863.0], [92.5, 873.0], [92.6, 873.0], [92.7, 873.0], [92.8, 873.0], [92.9, 873.0], [93.0, 904.0], [93.1, 904.0], [93.2, 904.0], [93.3, 904.0], [93.4, 904.0], [93.5, 913.0], [93.6, 913.0], [93.7, 913.0], [93.8, 913.0], [93.9, 913.0], [94.0, 922.0], [94.1, 922.0], [94.2, 922.0], [94.3, 922.0], [94.4, 922.0], [94.5, 939.0], [94.6, 939.0], [94.7, 939.0], [94.8, 939.0], [94.9, 939.0], [95.0, 963.0], [95.1, 963.0], [95.2, 963.0], [95.3, 963.0], [95.4, 963.0], [95.5, 973.0], [95.6, 973.0], [95.7, 973.0], [95.8, 973.0], [95.9, 973.0], [96.0, 977.0], [96.1, 977.0], [96.2, 977.0], [96.3, 977.0], [96.4, 977.0], [96.5, 1048.0], [96.6, 1048.0], [96.7, 1048.0], [96.8, 1048.0], [96.9, 1048.0], [97.0, 1049.0], [97.1, 1049.0], [97.2, 1049.0], [97.3, 1049.0], [97.4, 1049.0], [97.5, 1231.0], [97.6, 1231.0], [97.7, 1231.0], [97.8, 1231.0], [97.9, 1231.0], [98.0, 1315.0], [98.1, 1315.0], [98.2, 1315.0], [98.3, 1315.0], [98.4, 1315.0], [98.5, 1456.0], [98.6, 1456.0], [98.7, 1456.0], [98.8, 1456.0], [98.9, 1456.0], [99.0, 10611.0], [99.1, 10611.0], [99.2, 10611.0], [99.3, 10611.0], [99.4, 10611.0], [99.5, 11566.0], [99.6, 11566.0], [99.7, 11566.0], [99.8, 11566.0], [99.9, 11566.0]], "isOverall": false, "label": "20User1SecRampUp1loop", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 87.0, "series": [{"data": [[600.0, 87.0], [300.0, 5.0], [1200.0, 1.0], [10600.0, 1.0], [1300.0, 1.0], [700.0, 61.0], [1400.0, 1.0], [11500.0, 1.0], [800.0, 25.0], [900.0, 7.0], [500.0, 8.0], [1000.0, 2.0]], "isOverall": false, "label": "20User1SecRampUp1loop", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 193.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 193.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 5.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.5, "minX": 1.59136848E12, "maxY": 20.0, "series": [{"data": [[1.5913692E12, 20.0], [1.5913701E12, 10.5], [1.59136992E12, 20.0], [1.59136848E12, 20.0], [1.59136974E12, 20.0], [1.59136866E12, 20.0], [1.59136956E12, 20.0], [1.59136884E12, 20.0], [1.59136938E12, 20.0], [1.59136902E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5913701E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 384.0, "minX": 1.0, "maxY": 1049.0, "series": [{"data": [[8.0, 863.0], [2.0, 655.0], [9.0, 904.0], [10.0, 700.0], [11.0, 834.0], [12.0, 647.0], [3.0, 396.0], [13.0, 704.0], [14.0, 810.0], [15.0, 727.0], [16.0, 811.0], [4.0, 384.0], [1.0, 708.0], [17.0, 766.0], [18.0, 1049.0], [19.0, 645.0], [20.0, 826.4640883977901], [5.0, 672.0], [6.0, 973.0], [7.0, 977.0]], "isOverall": false, "label": "20User1SecRampUp1loop", "isController": false}, {"data": [[19.049999999999997, 819.0750000000002]], "isOverall": false, "label": "20User1SecRampUp1loop-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1514.4666666666667, "minX": 1.59136848E12, "maxY": 3077.05, "series": [{"data": [[1.5913692E12, 1660.5333333333333], [1.5913701E12, 1520.95], [1.59136992E12, 1665.0666666666666], [1.59136848E12, 1580.0333333333333], [1.59136974E12, 1673.8833333333334], [1.59136866E12, 1658.1666666666667], [1.59136956E12, 1654.3666666666666], [1.59136884E12, 1657.0333333333333], [1.59136938E12, 1514.4666666666667], [1.59136902E12, 1658.3333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5913692E12, 3076.25], [1.5913701E12, 3072.25], [1.59136992E12, 3074.25], [1.59136848E12, 3072.25], [1.59136974E12, 3076.516666666667], [1.59136866E12, 3076.05], [1.59136956E12, 3074.383333333333], [1.59136884E12, 3077.05], [1.59136938E12, 3072.25], [1.59136902E12, 3076.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5913701E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 675.85, "minX": 1.59136848E12, "maxY": 1311.8500000000001, "series": [{"data": [[1.5913692E12, 675.85], [1.5913701E12, 748.4], [1.59136992E12, 749.3000000000001], [1.59136848E12, 700.9499999999999], [1.59136974E12, 1311.8500000000001], [1.59136866E12, 717.6500000000001], [1.59136956E12, 702.65], [1.59136884E12, 1177.2], [1.59136938E12, 713.85], [1.59136902E12, 693.0500000000002]], "isOverall": false, "label": "20User1SecRampUp1loop", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5913701E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 675.8, "minX": 1.59136848E12, "maxY": 1311.8000000000002, "series": [{"data": [[1.5913692E12, 675.8], [1.5913701E12, 748.3499999999999], [1.59136992E12, 749.3000000000001], [1.59136848E12, 700.8999999999999], [1.59136974E12, 1311.8000000000002], [1.59136866E12, 717.5500000000001], [1.59136956E12, 702.5500000000002], [1.59136884E12, 1176.9], [1.59136938E12, 713.45], [1.59136902E12, 692.9]], "isOverall": false, "label": "20User1SecRampUp1loop", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5913701E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 14.35, "minX": 1.59136848E12, "maxY": 21.85, "series": [{"data": [[1.5913692E12, 19.599999999999998], [1.5913701E12, 21.85], [1.59136992E12, 19.299999999999997], [1.59136848E12, 15.100000000000001], [1.59136974E12, 14.35], [1.59136866E12, 19.85], [1.59136956E12, 21.150000000000006], [1.59136884E12, 14.950000000000001], [1.59136938E12, 16.750000000000004], [1.59136902E12, 20.15]], "isOverall": false, "label": "20User1SecRampUp1loop", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5913701E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 561.0, "minX": 1.59136848E12, "maxY": 11566.0, "series": [{"data": [[1.5913692E12, 778.0], [1.5913701E12, 1049.0], [1.59136992E12, 963.0], [1.59136848E12, 1231.0], [1.59136974E12, 11566.0], [1.59136866E12, 922.0], [1.59136956E12, 858.0], [1.59136884E12, 10611.0], [1.59136938E12, 1048.0], [1.59136902E12, 820.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5913692E12, 567.0], [1.5913701E12, 645.0], [1.59136992E12, 572.0], [1.59136848E12, 561.0], [1.59136974E12, 602.0], [1.59136866E12, 598.0], [1.59136956E12, 577.0], [1.59136884E12, 614.0], [1.59136938E12, 651.0], [1.59136902E12, 607.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5913692E12, 757.0], [1.5913701E12, 984.2], [1.59136992E12, 871.4000000000001], [1.59136848E12, 939.0], [1.59136974E12, 1441.9000000000003], [1.59136866E12, 810.6], [1.59136956E12, 843.1], [1.59136884E12, 769.1], [1.59136938E12, 926.5000000000002], [1.59136902E12, 774.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5913692E12, 778.0], [1.5913701E12, 1049.0], [1.59136992E12, 963.0], [1.59136848E12, 1231.0], [1.59136974E12, 11566.0], [1.59136866E12, 922.0], [1.59136956E12, 858.0], [1.59136884E12, 10611.0], [1.59136938E12, 1048.0], [1.59136902E12, 820.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5913692E12, 776.9499999999999], [1.5913701E12, 1049.0], [1.59136992E12, 958.5], [1.59136848E12, 1231.0], [1.59136974E12, 11060.499999999993], [1.59136866E12, 916.4499999999999], [1.59136956E12, 857.4], [1.59136884E12, 10118.949999999993], [1.59136938E12, 1048.0], [1.59136902E12, 817.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5913701E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 335.0, "minX": 1.0, "maxY": 732.0, "series": [{"data": [[2.0, 692.0], [1.0, 669.0], [4.0, 702.5], [3.0, 732.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 335.0], [1.0, 390.0], [3.0, 384.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 334.5, "minX": 1.0, "maxY": 732.0, "series": [{"data": [[2.0, 692.0], [1.0, 669.0], [4.0, 702.5], [3.0, 732.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 334.5], [1.0, 390.0], [3.0, 384.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.59136848E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.5913692E12, 0.3333333333333333], [1.5913701E12, 0.3333333333333333], [1.59136992E12, 0.3333333333333333], [1.59136848E12, 0.3333333333333333], [1.59136974E12, 0.3333333333333333], [1.59136866E12, 0.3333333333333333], [1.59136956E12, 0.3333333333333333], [1.59136884E12, 0.3333333333333333], [1.59136938E12, 0.3333333333333333], [1.59136902E12, 0.3333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5913701E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.59136848E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.5913692E12, 0.3333333333333333], [1.5913701E12, 0.3], [1.59136992E12, 0.3333333333333333], [1.59136848E12, 0.31666666666666665], [1.59136974E12, 0.3333333333333333], [1.59136866E12, 0.3333333333333333], [1.59136956E12, 0.3333333333333333], [1.59136884E12, 0.3333333333333333], [1.59136938E12, 0.3], [1.59136902E12, 0.3333333333333333]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.5913701E12, 0.03333333333333333], [1.59136848E12, 0.016666666666666666], [1.59136938E12, 0.03333333333333333]], "isOverall": false, "label": "409", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5913701E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.59136848E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.5913701E12, 0.03333333333333333], [1.59136848E12, 0.016666666666666666], [1.59136938E12, 0.03333333333333333]], "isOverall": false, "label": "20User1SecRampUp1loop-failure", "isController": false}, {"data": [[1.5913692E12, 0.3333333333333333], [1.5913701E12, 0.3], [1.59136992E12, 0.3333333333333333], [1.59136848E12, 0.31666666666666665], [1.59136974E12, 0.3333333333333333], [1.59136866E12, 0.3333333333333333], [1.59136956E12, 0.3333333333333333], [1.59136884E12, 0.3333333333333333], [1.59136938E12, 0.3], [1.59136902E12, 0.3333333333333333]], "isOverall": false, "label": "20User1SecRampUp1loop-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5913701E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.59136848E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.5913692E12, 0.3333333333333333], [1.5913701E12, 0.3], [1.59136992E12, 0.3333333333333333], [1.59136848E12, 0.31666666666666665], [1.59136974E12, 0.3333333333333333], [1.59136866E12, 0.3333333333333333], [1.59136956E12, 0.3333333333333333], [1.59136884E12, 0.3333333333333333], [1.59136938E12, 0.3], [1.59136902E12, 0.3333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.5913701E12, 0.03333333333333333], [1.59136848E12, 0.016666666666666666], [1.59136938E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5913701E12, "title": "Total Transactions Per Second"}},
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

