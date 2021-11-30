import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddUserContainerComponent, IUser, UsersService } from '../..';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss']
})
export class AddUserShellComponent implements OnInit {

  @ViewChild(AddUserContainerComponent)
  private formComponent:AddUserContainerComponent;

  constructor(private usersService: UsersService,
    private router: Router,
    public route: ActivatedRoute
    ) {}

  ngOnInit(): void {
  }

  goToMainPage() {
    this.router.navigate(['']);
  }

  submitNewUserForm(): void {   
    const newUser: IUser = this.createNewUserObject();
    this.usersService.addNewUser(newUser);
    setTimeout(() => {
      this.goToMainPage();
    }, 500);
  }

  createNewUserObject(): IUser {
    const nextId = this.usersService.getUsers().length;
    const formValue = this.formComponent.form.value;
    const newUser: IUser = {
      id: nextId,
      name: formValue.firstName + formValue.lastName,
      age: formValue.age,
      email: formValue.email,
      activated: true,
      company: formValue.company,
      departament: formValue.departament,
      gender: formValue.gender,
      vehicle: formValue.vehicle ? formValue.vehicle : 'No Vehicle',
      image: formValue.image ? formValue.image : '../../../assets/no car.png',
    }
    return newUser;
  }

}
