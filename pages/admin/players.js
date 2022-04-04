import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import toast from 'react-hot-toast';
import Layout from '../../src/vuexy/Layout';
import { useForm } from 'react-hook-form';
import { showErr } from '../../__lib__/helpers/ErrHandler';
import { getData, postData } from '../../__lib__/helpers/HttpService';
import { Man, Team, League } from '../../src/components/Icon';

export default function Home() {

    const [ loading, setLoading ] = useState(true);
    const [ players, setPlayers ] = useState();
    const [ disable, setDisable ] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onError = err => showErr(err);

    useEffect(()=>{
        fetctPlayer();
    }, [])

    const fetctPlayer = ()=>{
        getData('/players')
            .then(data=>{
                setPlayers(data);
                setLoading(false);
            })
    }

    const InsertPlayer = async(data)=>{
        setDisable(true)
        postData('/admin/player', data, setDisable)
        .then(res=>{
            if(res?.success)
            {  
                toast.success(`${res.message}`);
                reset();
            }
        })
    }


    const onSubmit = async data => {

        const formData = new FormData();

        formData.append('firstName', data.firstName);
        formData.append('lastName', data.lastName);
        formData.append('league', data.league);
        formData.append('playerTeam', data.playerTeam);
        formData.append('description', data.description);
        formData.append('image', data.image[0]);

        await InsertPlayer(formData);       
    }

    return (
        <Layout>
            <div className="row mt-120">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                    <div className="c-white">
                        <div className="card-body">
                        <form
                            onSubmit={handleSubmit(onSubmit, onError)}  
                        >
                            <div className="row">
                                <div className="col-sm-12">
                                    <h6 className="text-center mb-2">Add Player</h6>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-group-merge mb-1 input-group">
                                                <span className="input-group-text">
                                                    <Man/>
                                                </span>
                                                <input 
                                                    {...register("firstName",
                                                        {
                                                            required: 'first name is requires'
                                                        }
                                                    )}
                                                    id="nameVerticalIcons" 
                                                    placeholder="first name" 
                                                    type="text" 
                                                    className="form-control" 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group-merge mb-1 input-group">
                                                <span className="input-group-text">
                                                    <Man/>
                                                </span>
                                                <input 
                                                    {...register("lastname",
                                                        {
                                                            required: 'last name is required.'
                                                        }
                                                    )}
                                                    id="nameVerticalIcons" 
                                                    placeholder="last name" 
                                                    type="text" 
                                                    className="form-control" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-group-merge mb-1 input-group">
                                                <span className="input-group-text">
                                                    <League/>
                                                </span>
                                                <select
                                                    {...register("league",
                                                        {
                                                            required: 'Please select a league.'
                                                        }
                                                    )} 
                                                    className="form-select"
                                                >
                                                    <option selected>Select</option>
                                                    <option value="MLB">MLB</option>
                                                    <option value="NFL">NFL</option>
                                                    <option value="NBA">NBA</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group-merge mb-1 input-group">
                                                <span className="input-group-text">
                                                    <Team />
                                                </span>
                                                <input 
                                                    {...register("playerTeam",
                                                        {
                                                            required: 'Team is required.'
                                                        }
                                                    )}
                                                    placeholder="Team" 
                                                    type="text" 
                                                    className="form-control" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="input-group-merge mb-1 input-group">
                                                <textarea
                                                    {...register("description",
                                                        {
                                                            required: 'Description required.'
                                                        }
                                                    )} 
                                                    className="form-control" 
                                                    id="descriptionArea" 
                                                    rows="3" 
                                                    placeholder="Description">
                                                
                                                </textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="input-group-merge mb-1 input-group pr-1">
                                                <label htmlFor="fileManager" className="mb-2">Player Image</label>
                                                <input
                                                    {...register("image",
                                                        {
                                                            required: 'Image is required.'
                                                        }
                                                    )} 
                                                    id="fileManager"
                                                    type="file" 
                                                    accept=".png, .jpg"
                                                    className="form-control-file" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="d-flex">
                                        <button
                                            disabled={disable} 
                                            type="submit" 
                                            className="me-1 btn btn-primary"
                                        >Submit</button>
                                        <button 
                                            type="reset" 
                                            className="btn btn-outline-secondary"
                                        >Reset</button></div>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>

                    <h6 className="mt-4">Videos</h6>
                    {
                        !loading && <table className="table">
                            <thead>
                                <tr>
                                <th width="10%" scope="col">Name</th>
                                <th scope="col">Video</th>
                                <th scope="col">View</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </Layout>
    )
}

