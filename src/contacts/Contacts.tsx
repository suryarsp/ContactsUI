import * as React from 'react';
import menu from '../assets/open-menu.svg';
import plus from '../assets/plus.svg';
import { IContactState } from '../interfaces/contacts/IContactState';
import { IContactProps } from '../interfaces/contacts/IContactProps';
import '../contacts/Contact.scss';

export default class Contacts extends React.Component<IContactState, IContactProps> {

    render() {
        return (
            <React.Fragment>
                {/* Contact Header with sort*/}
                {/* Contact Search & Actions */}
                {/* Contact list */}
                {/* Right Layout */}
                {/* Contact Information*/}
                {/* Message Component */}

                <div className="row">
                    <div className="col sidemenuContainer">
                        <a href="javascript:void(0);" className="topMenu"><img width='20' src={menu} /></a>
                        <ul className="sideMenu">
                            <li className="active"><a href="javascript:void(0);"><img width='20' src={menu} /></a></li>
                            <li><a href="javascript:void(0);"><img width='20' src={menu} /></a></li>
                            <li><a href="javascript:void(0);"><img width='20' src={menu} /></a></li>
                            <li><a href="javascript:void(0);"><img width='20' src={menu} /></a></li>
                            <li><a href="javascript:void(0);"><img width='20' src={menu} /></a></li>
                            <li><a href="javascript:void(0);"><img width='20' src={menu} /></a></li>
                            <li><a href="javascript:void(0);"><img width='20' src={menu} /></a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <header>
                            <div className="row m-0 justify-content-center h-100">
                                <div className="col-md-9 p-0">
                                    <div className="searchContainer h-100">
                                        <span className="searchIcon"><img width='10' src={plus} /></span>
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-md-3 p-0 d-flex justify-content-end">
                                    <a href="javascript:void(0);" className="profileAction"><img width='10' src={plus} />Add</a>
                                    <a href="javascript:void(0);" className="profileAction"><img width='15' src={plus} /></a>
                                    <a href="javascript:void(0);" className="profileAction">Mark Hendry</a>
                                    <a href="javascript:void(0);" className="profileAction"><img width='15' src={plus} /></a>
                                </div>
                            </div>
                        </header>
                        <div className="row justify-content-around">
                            <div className="col-md-5 contactLeft">
                                <div className="row">
                                    <div className="col-md-7">
                                        <h3>Contacts</h3>
                                        <p>Include Stateforese asdasda</p>
                                    </div>

                                    <div className="col-md-5">
                                        <label>Sort by: <span>Date Created</span></label>
                                    </div>
                                </div>
                                <form className="form-inline mt-5" action="/action_page.php">
                                    <div className="form-group">
                                        <input type="email" placeholder="Search Contacts" className="form-control searchField" id="email" />
                                    </div>
                                    <button type="submit" className="btn btn-primary ml-3">Add Contact</button>
                                </form>
                                <table className="table table-borderless mt-5">
                                    <thead>
                                        <tr>
                                            <th><img width='10' src={plus} /></th>
                                            <th>Basic Info</th>
                                            <th>Company</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="checkbox" className="form-control checkBox" />
                                            </td>
                                            <td>
                                                <div className="row">
                                                    <div className="col profImg">KT</div>
                                                    <div className="col -md-12">
                                                        <h6>Dolor consectetur venenatis</h6>
                                                        <p>Dolor consectetur venenatis laoreet ante a purus.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Facilisis.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" className="form-control checkBox" />
                                            </td>
                                            <td>
                                                <div className="row">
                                                    <div className="col profImg">KT</div>
                                                    <div className="col -md-12">
                                                        <h6>Dolor consectetur venenatis</h6>
                                                        <p>Dolor consectetur venenatis laoreet ante a purus.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Facilisis.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" className="form-control checkBox" />
                                            </td>
                                            <td>
                                                <div className="row">
                                                    <div className="col profImg">KT</div>
                                                    <div className="col -md-12">
                                                        <h6>Dolor consectetur venenatis</h6>
                                                        <p>Dolor consectetur venenatis laoreet ante a purus.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Facilisis.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" className="form-control checkBox" />
                                            </td>
                                            <td>
                                                <div className="row">
                                                    <div className="col profImg">KT</div>
                                                    <div className="col -md-12">
                                                        <h6>Dolor consectetur venenatis</h6>
                                                        <p>Dolor consectetur venenatis laoreet ante a purus.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Facilisis.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" className="form-control checkBox" />
                                            </td>
                                            <td>
                                                <div className="row">
                                                    <div className="col profImg">KT</div>
                                                    <div className="col -md-12">
                                                        <h6>Dolor consectetur venenatis</h6>
                                                        <p>Dolor consectetur venenatis laoreet ante a purus.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Facilisis.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-5 contactRight">
                                <div className="sideBlock">
                                    <div className="sideBlockheader">
                                        <div className="sideBlockImg">MH</div>
                                        <h5>Cubilia a scelerisque</h5>
                                        <p className="small">At convallis porttitor molestie curabitur sociosqu consectetur.</p>
                                    </div>
                                    <table className="table mt-5">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Full Name
                                                </td>
                                                <td>Facilisis.</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Full Name
                                                </td>
                                                <td>Facilisis.</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Full Name
                                                </td>
                                                <td>Facilisis.</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Full Name
                                                </td>
                                                <td>Facilisis.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="sideBlock mt-5">
                                    <div className="row">
                                        <div className="col-md-2 align-self-center"><img width='40' src={plus} /></div>
                                        <div className="col-md-8 align-self-center">
                                            <h5>Cubilia a scelerisque</h5>
                                            <p className="small">At convallis porttitor molestie curabitur sociosqu consectetur.</p>
                                        </div>
                                        <div className="col-md-2 align-self-center text-center">...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </React.Fragment>
        );
    }

} 