# alfin_upn_zetta_learning
Nama : Alfinhi Hajid Dhia
Nickname : Alfin

Angular Lifecycle Report

Setiap komponen atau directive memiliki lifecycle saat dibuat, diupdate, maupun di hancurkan (destroy). Terdapat 8 interface yang akan mengimplementasikan hal itu mulai dari tahap dibuat sampai di hancurkan, yaitu :

1. ngOnChanges() = Called after bound input property changes

2. ngOnInit() = Called once the component initialized

3. ngDoCheck() = Called during every change detection run

4. ngAfterContentInit() = Called after content (ng-content) has been projected into view 

5. ngAfterContentChecked() = Called every time the projected content has been checked

6. ngAfterViewInit() = Called after the component's view (and child views) has been initialized 

7. ngAfterViewChecked() = Called every time the view (and child views) has been checked

8. ngOnDestroy() = Called once the component is about to be destroyed

Quiz :
1. Write 2 possible cases to do in ngOnInit lifecycle hook.
2. When does Angular call ngOnInit?
3. When does Angular call ngAfterViewInit?
4. When does Angular call ngOnChange?
5. There is a scenario where you reload a page that contains a table, a paginator, and a list that you can click to change the content in the page, then you click on another list. Arrange the possible lifecycle hooks called in that scenario? Video: https://www.awesomescreenshot.com/video/11102922?key=021f31848f9fae1955fa598d0901ab7d

Answer :
1. 2 Posibble Cases on ngOnInit

A. PreStop = Dijalankan sesaat sebelum kontainer dimatikan, karena request dari API/Event pengaturan.

B. PostStart = Dijalankan segera setelah suatu kontainer dibuat, hanya saja hook ini akan dieksekusi sebelum ENTRYPOINT dari kontainer dan tidak ada parameter yang diberikan pada handler.

2. ngOnInit dipanggil sekali pada saat komponen di inisialisasikan

3. ngAfterViewInit dipanggil setelah komponen view dan child view di inisialisasikan

4. ngOnChange dipanggil setelah bound input pada properti berubah / terjadi perubahan pada event input yang menyebabkan view berubah. 

5. Saat melakukan reload page, maka akan dipanggil ngOnInit untuk menginisialisasikan komponen tersebut, kemudian saat another list ditekan, maka data pada tabel akan berubah dengan menerapkan ngOnChanges, yang akan mengganti value sebelumnya, menjadi value yang sekarang.