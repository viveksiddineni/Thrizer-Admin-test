import { Pipe, PipeTransform } from "@angular/core";
// import { access } from 'fs';
import { StorageService } from "projects/thrizer-admin-app/src/app/services/storage.service";
import { UtilityService } from 'projects/thrizer-admin-app/src/app/shared/utility/utility.service';

@Pipe({
  name: "access",
})
export class AccessPipe implements PipeTransform {
  access: any = null;
  constructor(storage: StorageService,
     private utilityService:UtilityService
    ) {
    // storage.menuDataArray.subscribe((accessModules) => {
    //   this.access = accessModules;
    // });
    // console.log(utilityService.profileData);
    this.access=utilityService.profileData.roles
  }
  transform(module: string, action?: string): any {
    const value = this.access;
    // console.log(
    //   'pipe',
    //   module,
    //   action,
    //   value,
    //   value ? `${value[module]} & ${!action || value[module][action]}` : ''
    // );

    return (
      value &&
      value[module] &&
      value[module].list &&
      (!action || value[module][action])
    );
    // return this.checkAccess(module,action);
  }

  async checkAccess(module: string, action?: string){
    try {
        const res=await this.utilityService.getprofileDetail();
        this.access=res.roles;
      const value = this.access;
    //    console.log(
    //   'pipe',
    //   module,
    //   action,
    //   value,
    //   value ? `${value[module]} & ${!action || value[module][action]}` : '',
    //   value &&
    //   value[module] &&
    //   value[module].list &&
    //   (!action || value[module][action])
    // );
      return (
        value &&
        value[module] &&
        value[module].list &&
        (!action || value[module][action])
      );
    } catch (er) {
      
    }
  }
}
