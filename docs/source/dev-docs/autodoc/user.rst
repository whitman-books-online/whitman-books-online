####
user
####

.. raw:: html

   <dl class="class">
   <dt id="api.user.User">
   <em class="property">class </em><code class="descclassname">api.user.</code><code class="descname">User</code><a class="headerlink" href="#api.user.User" title="Permalink to this definition">¶</a></dt>
   <dd><p>Bases: <code class="xref py py-class docutils literal notranslate"><span class="pre">flask_restful.Resource</span></code></p>
   <dl class="classmethod">
   <dt id="api.user.User.as_view">
   <em class="property">classmethod </em><code class="descname">as_view</code><span class="sig-paren">(</span><em>name</em>, <em>*class_args</em>, <em>**class_kwargs</em><span class="sig-paren">)</span><a class="headerlink" href="#api.user.User.as_view" title="Permalink to this definition">¶</a></dt>
   <dd><p>Converts the class into an actual view function that can be used
   with the routing system.  Internally this generates a function on the
   fly which will instantiate the <code class="xref py py-class docutils literal notranslate"><span class="pre">View</span></code> on each request and call
   the <a class="reference internal" href="#api.user.User.dispatch_request" title="api.user.User.dispatch_request"><code class="xref py py-meth docutils literal notranslate"><span class="pre">dispatch_request()</span></code></a> method on it.</p>
   <p>The arguments passed to <a class="reference internal" href="#api.user.User.as_view" title="api.user.User.as_view"><code class="xref py py-meth docutils literal notranslate"><span class="pre">as_view()</span></code></a> are forwarded to the
   constructor of the class.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.user.User.decorators">
   <code class="descname">decorators</code><em class="property"> = ()</em><a class="headerlink" href="#api.user.User.decorators" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.user.User.delete">
   <code class="descname">delete</code><span class="sig-paren">(</span><em>google_tok</em><span class="sig-paren">)</span><a class="headerlink" href="#api.user.User.delete" title="Permalink to this definition">¶</a></dt>
   <dd><p>Deletes a user from the database.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>google_tok</strong> (<em>str</em>) – The google token of the book being deleted.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">What happened with the delete call.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">message</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="method">
   <dt id="api.user.User.dispatch_request">
   <code class="descname">dispatch_request</code><span class="sig-paren">(</span><em>*args</em>, <em>**kwargs</em><span class="sig-paren">)</span><a class="headerlink" href="#api.user.User.dispatch_request" title="Permalink to this definition">¶</a></dt>
   <dd><p>Subclasses have to override this method to implement the
   actual view function code.  This method is called with all
   the arguments from the URL rule.</p>
   </dd></dl>

   <dl class="method">
   <dt id="api.user.User.get">
   <code class="descname">get</code><span class="sig-paren">(</span><em>google_tok</em><span class="sig-paren">)</span><a class="headerlink" href="#api.user.User.get" title="Permalink to this definition">¶</a></dt>
   <dd><p>Get request, looking for all users with google token.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>google_tok</strong> (<em>str</em><em>[</em><em>]</em>) – A list of google tokens to query with.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A list of jsonified users.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json[]</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.user.User.method_decorators">
   <code class="descname">method_decorators</code><em class="property"> = []</em><a class="headerlink" href="#api.user.User.method_decorators" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.user.User.methods">
   <code class="descname">methods</code><em class="property"> = set(['POST', 'DELETE', 'GET'])</em><a class="headerlink" href="#api.user.User.methods" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.user.User.parser">
   <code class="descname">parser</code><em class="property"> = &lt;flask_restful.reqparse.RequestParser object&gt;</em><a class="headerlink" href="#api.user.User.parser" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.user.User.post">
   <code class="descname">post</code><span class="sig-paren">(</span><em>google_tok</em><span class="sig-paren">)</span><a class="headerlink" href="#api.user.User.post" title="Permalink to this definition">¶</a></dt>
   <dd><p>Posts a user to the database.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>google_tok</strong> (<em>str</em>) – The google token of the user being posted.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">What happened with the post call.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">message</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.user.User.provide_automatic_options">
   <code class="descname">provide_automatic_options</code><em class="property"> = None</em><a class="headerlink" href="#api.user.User.provide_automatic_options" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.user.User.representations">
   <code class="descname">representations</code><em class="property"> = None</em><a class="headerlink" href="#api.user.User.representations" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   </dd></dl>

   <dl class="class">
   <dt id="api.user.UserList">
   <em class="property">class </em><code class="descclassname">api.user.</code><code class="descname">UserList</code><a class="headerlink" href="#api.user.UserList" title="Permalink to this definition">¶</a></dt>
   <dd><p>Bases: <code class="xref py py-class docutils literal notranslate"><span class="pre">flask_restful.Resource</span></code></p>
   <p>The UserList object handles the entire list of users in the database.</p>
   <dl class="attribute">
   <dt>
   <code class="descname">none.</code></dt>
   <dd></dd></dl>

   <dl class="classmethod">
   <dt id="api.user.UserList.as_view">
   <em class="property">classmethod </em><code class="descname">as_view</code><span class="sig-paren">(</span><em>name</em>, <em>*class_args</em>, <em>**class_kwargs</em><span class="sig-paren">)</span><a class="headerlink" href="#api.user.UserList.as_view" title="Permalink to this definition">¶</a></dt>
   <dd><p>Converts the class into an actual view function that can be used
   with the routing system.  Internally this generates a function on the
   fly which will instantiate the <code class="xref py py-class docutils literal notranslate"><span class="pre">View</span></code> on each request and call
   the <a class="reference internal" href="#api.user.UserList.dispatch_request" title="api.user.UserList.dispatch_request"><code class="xref py py-meth docutils literal notranslate"><span class="pre">dispatch_request()</span></code></a> method on it.</p>
   <p>The arguments passed to <a class="reference internal" href="#api.user.UserList.as_view" title="api.user.UserList.as_view"><code class="xref py py-meth docutils literal notranslate"><span class="pre">as_view()</span></code></a> are forwarded to the
   constructor of the class.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.user.UserList.decorators">
   <code class="descname">decorators</code><em class="property"> = ()</em><a class="headerlink" href="#api.user.UserList.decorators" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="method">
   <dt id="api.user.UserList.dispatch_request">
   <code class="descname">dispatch_request</code><span class="sig-paren">(</span><em>*args</em>, <em>**kwargs</em><span class="sig-paren">)</span><a class="headerlink" href="#api.user.UserList.dispatch_request" title="Permalink to this definition">¶</a></dt>
   <dd><p>Subclasses have to override this method to implement the
   actual view function code.  This method is called with all
   the arguments from the URL rule.</p>
   </dd></dl>

   <dl class="method">
   <dt id="api.user.UserList.get">
   <code class="descname">get</code><span class="sig-paren">(</span><em>tokens</em><span class="sig-paren">)</span><a class="headerlink" href="#api.user.UserList.get" title="Permalink to this definition">¶</a></dt>
   <dd><p>Gets a list of all users in database that match any token from a list
   of tokens..</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>tokens</strong> (<em>str</em><em>[</em><em>]</em>) – A list of tokens to query with.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A list of jsonified users that match the tokens.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json[]</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.user.UserList.method_decorators">
   <code class="descname">method_decorators</code><em class="property"> = []</em><a class="headerlink" href="#api.user.UserList.method_decorators" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.user.UserList.methods">
   <code class="descname">methods</code><em class="property"> = set(['GET'])</em><a class="headerlink" href="#api.user.UserList.methods" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.user.UserList.provide_automatic_options">
   <code class="descname">provide_automatic_options</code><em class="property"> = None</em><a class="headerlink" href="#api.user.UserList.provide_automatic_options" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.user.UserList.representations">
   <code class="descname">representations</code><em class="property"> = None</em><a class="headerlink" href="#api.user.UserList.representations" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   </dd></dl>

   <dl class="class">
   <dt id="api.user.UserModel">
   <em class="property">class </em><code class="descclassname">api.user.</code><code class="descname">UserModel</code><span class="sig-paren">(</span><em>google_tok</em>, <em>imageURL</em>, <em>email</em>, <em>name</em>, <em>givenName</em>, <em>familyName</em><span class="sig-paren">)</span><a class="headerlink" href="#api.user.UserModel" title="Permalink to this definition">¶</a></dt>
   <dd><p>Bases: <code class="xref py py-class docutils literal notranslate"><span class="pre">sqlalchemy.ext.declarative.api.Model</span></code></p>
   <p>The UserModel object stores information about the user, as well as
   the listing objects that are associated with it.</p>
   <dl class="attribute">
   <dt id="api.user.UserModel.google_tok">
   <code class="descname">google_tok</code><a class="headerlink" href="#api.user.UserModel.google_tok" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The google token for the user.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.user.UserModel.imageURL">
   <code class="descname">imageURL</code><a class="headerlink" href="#api.user.UserModel.imageURL" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The URL referencing the user’s image.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.user.UserModel.email">
   <code class="descname">email</code><a class="headerlink" href="#api.user.UserModel.email" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The user’s email.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.user.UserModel.name">
   <code class="descname">name</code><a class="headerlink" href="#api.user.UserModel.name" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The user’s first name.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.user.UserModel.givenName">
   <code class="descname">givenName</code><a class="headerlink" href="#api.user.UserModel.givenName" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The user’s given name.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.user.UserModel.familyName">
   <code class="descname">familyName</code><a class="headerlink" href="#api.user.UserModel.familyName" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>string</em> – The user’s last name.</p>
   </dd></dl>

   <dl class="attribute">
   <dt id="api.user.UserModel.listings">
   <code class="descname">listings</code><a class="headerlink" href="#api.user.UserModel.listings" title="Permalink to this definition">¶</a></dt>
   <dd><p><em>ListingModel[]</em> – All listings posted by the user,</p>
   </dd></dl>

   <dl class="method">
   <dt id="api.user.UserModel.bare_json">
   <code class="descname">bare_json</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.user.UserModel.bare_json" title="Permalink to this definition">¶</a></dt>
   <dd><p>Returns a jsonified user item, with a list of listing ids.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A json item representing the user.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="method">
   <dt id="api.user.UserModel.delete_from_db">
   <code class="descname">delete_from_db</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.user.UserModel.delete_from_db" title="Permalink to this definition">¶</a></dt>
   <dd><p>Deletes the user from the database.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">none.</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">email</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">familyName</code></dt>
   <dd></dd></dl>

   <dl class="classmethod">
   <dt id="api.user.UserModel.find_by_email">
   <em class="property">classmethod </em><code class="descname">find_by_email</code><span class="sig-paren">(</span><em>email</em><span class="sig-paren">)</span><a class="headerlink" href="#api.user.UserModel.find_by_email" title="Permalink to this definition">¶</a></dt>
   <dd><p>Finds a user by email.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>email</strong> (<em>str</em>) – The email of the user we’re searching for.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">The user who matches the email.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body"><a class="reference internal" href="#api.user.UserModel" title="api.user.UserModel">UserModel</a></td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="classmethod">
   <dt id="api.user.UserModel.find_by_google_tok">
   <em class="property">classmethod </em><code class="descname">find_by_google_tok</code><span class="sig-paren">(</span><em>google_tok</em><span class="sig-paren">)</span><a class="headerlink" href="#api.user.UserModel.find_by_google_tok" title="Permalink to this definition">¶</a></dt>
   <dd><p>Finds a user by google token.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>google_tok</strong> (<em>str</em>) – The google token of the user we’re looking for.</td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">The user who matches the google token..</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body"><a class="reference internal" href="#api.user.UserModel" title="api.user.UserModel">UserModel</a></td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="method">
   <dt id="api.user.UserModel.get_listings">
   <code class="descname">get_listings</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.user.UserModel.get_listings" title="Permalink to this definition">¶</a></dt>
   <dd><p>Get a list of book listing jsons posted by the user.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A list of jsonified listings.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json[]</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">givenName</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">google_tok</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">imageURL</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">listings</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.user.UserModel.metadata">
   <code class="descname">metadata</code><em class="property"> = MetaData(bind=None)</em><a class="headerlink" href="#api.user.UserModel.metadata" title="Permalink to this definition">¶</a></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt>
   <code class="descname">name</code></dt>
   <dd></dd></dl>

   <dl class="attribute">
   <dt id="api.user.UserModel.query_class">
   <code class="descname">query_class</code><a class="headerlink" href="#api.user.UserModel.query_class" title="Permalink to this definition">¶</a></dt>
   <dd><p>alias of <code class="xref py py-class docutils literal notranslate"><span class="pre">flask_sqlalchemy.BaseQuery</span></code></p>
   </dd></dl>

   <dl class="method">
   <dt id="api.user.UserModel.save_to_db">
   <code class="descname">save_to_db</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.user.UserModel.save_to_db" title="Permalink to this definition">¶</a></dt>
   <dd><p>Saves the user to the database.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A json item representing the user.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="method">
   <dt id="api.user.UserModel.user_json_w_listings">
   <code class="descname">user_json_w_listings</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.user.UserModel.user_json_w_listings" title="Permalink to this definition">¶</a></dt>
   <dd><p>Returns a jsonified user item, with a list of jsonified listings.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A json item representing the user.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   <dl class="method">
   <dt id="api.user.UserModel.user_json_wo_listings">
   <code class="descname">user_json_wo_listings</code><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#api.user.UserModel.user_json_wo_listings" title="Permalink to this definition">¶</a></dt>
   <dd><p>Returns a jsonified user item.</p>
   <table class="docutils field-list" frame="void" rules="none">
   <col class="field-name" />
   <col class="field-body" />
   <tbody valign="top">
   <tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><strong>none.</strong> – </td>
   </tr>
   <tr class="field-even field"><th class="field-name">Returns:</th><td class="field-body">A json item representing the user.</td>
   </tr>
   <tr class="field-odd field"><th class="field-name">Return type:</th><td class="field-body">json</td>
   </tr>
   </tbody>
   </table>
   </dd></dl>

   </dd></dl>
