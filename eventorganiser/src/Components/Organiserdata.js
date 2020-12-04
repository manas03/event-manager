import React from "react";
import "./Organiserdata.css";

function Organiserdata() {
  return (
    /*<header>        <div class="table-wrapper">
        <div class="table-title">
            <div class="row">
                <div class="col-sm-6"><h2>Manage <b>Domains</b> Website</h2></div>
                <div class="col-sm-6">
                    <div class="btn-group" data-toggle="buttons">
                        <label class="btn btn-info active">
                            <input type="radio" name="status" value="all" checked="checked"> All
                        </label>
                        <label class="btn btn-success">
                            <input type="radio" name="status" value="active"> Active
                        </label>
                        <label class="btn btn-warning">
                            <input type="radio" name="status" value="inactive"> Inactive
                        </label>
                        <label class="btn btn-danger">
                            <input type="radio" name="status" value="expired"> Expired
                        </label>       
                    </div>
                </div>
            </div>
        </div>*/
    <div class="table-wrapper">
      <div class="table-title">
        <div class="row">
          <div class="col-sm-6">
            <h2>
              Event <b>Collection</b>
            </h2>
          </div>
          <div class="col-sm-6">
            <div class="btn-group" data-toggle="buttons">
              <label class="btn btn-info active">
                <input
                  type="radio"
                  name="status"
                  value="all"
                  checked="checked"
                />{" "}
                All
              </label>
              <label class="btn btn-success">
                <input type="radio" name="status" value="active" /> Registered
              </label>
            </div>
          </div>
        </div>
      </div>

      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Status</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr data-status="active">
            <td>1</td>
            <td>
              <a href="soengsouy.com">rachitsinghal40@gmail.com</a>
            </td>
            <td>Rachit Singhal</td>
            <td>
              <span class="label label-success">R</span>
            </td>
            <td>20</td>
            <td>
              <a href="soengsouy.com" class="btn btn-sm manage">
                DELETE
              </a>
            </td>
          </tr>
          <tr data-status="inactive">
            <td>2</td>
            <td>
              <a href="soengsouy.com">john@gmail.com</a>
            </td>
            <td>John Doe</td>
            <td>
              <span class="label label-warning">R</span>
            </td>
            <td>26</td>
            <td>
              <a href="#" class="btn btn-sm manage">
                DELETE
              </a>
            </td>
          </tr>
          <tr data-status="active">
            <td>3</td>
            <td>
              <a href="soengsouy.com">rs40@gmail.com</a>
            </td>
            <td>Rohan</td>
            <td>
              <span class="label label-success">R</span>
            </td>
            <td>17</td>
            <td>
              <a href="#" class="btn btn-sm manage">
                DELETE
              </a>
            </td>
          </tr>
          <tr data-status="expired">
            <td>4</td>
            <td>
              <a href="soengsouy.com">m3@gmail.com</a>
            </td>
            <td>Manas</td>
            <td>
              <span class="label label-danger">R</span>
            </td>
            <td>21</td>
            <td>
              <a href="#" class="btn btn-sm manage">
                DELETE
              </a>
            </td>
          </tr>
          <tr data-status="inactive">
            <td>5</td>
            <td>
              <a href="soengsouy.com">janert22@gmail.com</a>
            </td>
            <td>Jane</td>
            <td>
              <span class="label label-warning">R</span>
            </td>
            <td>19</td>
            <td>
              <a href="#" class="btn btn-sm manage">
                DELETE
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Organiserdata;
